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
    // number, boolean, symbol, function etc. — keep as is
    return value;
  }

  // protect against circular refs
  if (seen.has(value)) return value;
  seen.add(value);

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = deepReplaceStrings(value[i], re, seen);
    }
    return value;
  }

  // plain object
  for (const k of Object.keys(value)) {
    try {
      value[k] = deepReplaceStrings(value[k], re, seen);
    } catch (err) {
      // ignore single-field errors
    }
  }
  return value;
}

const originalFetch = window.fetch || fetch;

// Wrapped fetch with response processing
const interceptedFetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
  const response = await originalFetch(...args);

  try {
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      let data = await response.json();
      deepReplaceStrings(data, TO_REMOVE_REGEX);
      const newBody = JSON.stringify(data);
      return new Response(newBody, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    } else if (contentType.includes('text/')) {
      let text = await response.text();
      text = text.replace(TO_REMOVE_REGEX, '');
      return new Response(text, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }

    return response;
  } catch (err) {
    // Ignore processing errors and return original response
    return response;
  }
};

window.fetch = interceptedFetch;

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
      }
    })

    return result.url;
  }
}

export const api = new ClientApi({
  BASE: OpenAPI.BASE,
  TOKEN: OpenAPI.TOKEN,
});
export * from "./client";
