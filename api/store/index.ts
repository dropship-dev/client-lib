import { ClientApi as _ClientApi, ApiError, OpenAPI } from "./client";
import axios from "axios";

if (process.env.API_URL) {
  OpenAPI.BASE = process.env.API_URL;
}

const regexPattern = process.env.CDN_URL;
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

axios.interceptors.response.use(
  (response) => {
    console.log("run in response interceptors")
    try {
      const ct = (response.headers && response.headers['content-type']) || '';
      if (ct.includes('application/json') || typeof response.data === 'object') {
        deepReplaceStrings(response.data, TO_REMOVE_REGEX);
        console.log("response.data", response.data)
      } else if (typeof response.data === 'string') {
        // text/html, text/plain, etc.
        response.data = response.data.replace(TO_REMOVE_REGEX, '');
        console.log("response.data", response.data)
      }
    } catch (err) {}
    return response;
  },
  (error) => Promise.reject(error)
);

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
