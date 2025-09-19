import { ClientApi as _ClientApi, ApiError, OpenAPI } from "./client";

if (process.env.API_URL) {
  OpenAPI.BASE = process.env.API_URL;
}

const regexPattern = process.env.CDN_URL || "";
const TO_REMOVE_REGEX = new RegExp(regexPattern, "g");

function deepReplaceStrings(value: any, re: any, seen = new WeakSet()) {
  if (value === null || value === undefined) return value;

  if (typeof value === "string") {
    return value.replace(re, "");
  }

  if (typeof value !== "object") {
    return value;
  }

  if (seen.has(value)) return value;
  seen.add(value);

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = deepReplaceStrings(value[i], re, seen);
    }
    return value;
  }

  for (const k of Object.keys(value)) {
    try {
      value[k] = deepReplaceStrings(value[k], re, seen);
    } catch (err) {
      // ignore single-field errors
    }
  }
  return value;
}

const originalFetch = fetch;

const createInterceptedFetch = () => {
  const interceptedFetch = async (
    ...args: Parameters<typeof fetch>
  ): Promise<Response> => {
    try {
      const response = await originalFetch(...args);
      if (!(process.env.API_URL && args.length > 0 && args[0].startsWith(process.env.API_URL))) {
        return response;
      }

      const clonedResponse = response.clone();

      try {
        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          const data = await clonedResponse.json();
          const processedData = deepReplaceStrings(data, TO_REMOVE_REGEX);

          return new Response(JSON.stringify(processedData), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });
        } else if (contentType.includes("text/")) {
          const text = await clonedResponse.text();
          const processedText = text.replace(TO_REMOVE_REGEX, "");

          return new Response(processedText, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });
        }
      } catch (err) {
        console.warn("Error processing fetch response:", err);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  (interceptedFetch as any).__original = originalFetch;

  return interceptedFetch;
};

const setupFetchInterceptor = () => {
  const interceptedFetch = createInterceptedFetch();

  try {
    // 1. globalThis (Universal)
    if (typeof globalThis !== "undefined") {
      globalThis.fetch = interceptedFetch;
      globalThis.isFetchIntercepted = true;
    }

    // 2. global (Node.js)
    if (typeof global !== "undefined") {
      global.fetch = interceptedFetch;
      global.isFetchIntercepted = true;
    }

    // 3. window (Browser)
    if (typeof window !== "undefined") {
      window.fetch = interceptedFetch;
      window.isFetchIntercepted = true;
    }

    // 4. self (Web Workers, Service Workers)
    if (typeof self !== "undefined" && self.fetch) {
      self.fetch = interceptedFetch;
      self.isFetchIntercepted = true;
    }
  } catch (error) {
    console.warn("Failed to setup fetch interceptor:", error);
  }
};

(() => {
  const isAlreadyIntercepted =
    (typeof globalThis !== "undefined" && globalThis.isFetchIntercepted) ||
    (typeof global !== "undefined" && global.isFetchIntercepted) ||
    (typeof window !== "undefined" && window.isFetchIntercepted) ||
    (typeof self !== "undefined" && self.isFetchIntercepted);

  if (!isAlreadyIntercepted) {
    setupFetchInterceptor();
  }
})();

class ClientApi extends _ClientApi {
  public async uploadFile(file: File): Promise<string> {
    let result = {
      signedUrl: "",
      url: "",
    };
    try {
      result = await this.upload.createUpload({
        requestBody: {
          contentLength: file.size,
          fileName: file.name,
        },
      });
    } catch (e) {
      if (e instanceof ApiError) {
        if ("details" in e.body && e.body.details === "File too large") {
          throw new Error("File too large");
        }
      }

      throw e;
    }

    const body = new Blob([file], { type: file.type });
    await this.request.request({
      method: "PUT",
      url: result.signedUrl,
      body: body,
      headers: {
        "Content-Type": file.type,
        "Content-Length": file.size,
      },
    });

    return result.url;
  }
}

declare global {
  var isFetchIntercepted: boolean;
}

export const api = new ClientApi({
  BASE: OpenAPI.BASE,
  TOKEN: OpenAPI.TOKEN,
});
export * from "./client";