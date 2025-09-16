import { getToken } from "../../lib/firebase";
import { ClientApi as _ClientApi, ApiError, OpenAPI } from "./client";
import axios from "axios";

if (process.env.NEXT_PUBLIC_API_URL) {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL;
}

const instance = axios.create()

axios.interceptors.request.use(
  async function (config) {
    try {
      const token = await getToken();
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error(error);
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const TO_REMOVE_REGEX =
  /https?:\/\/cdn\.bettamax\.com\/?|cdn\.bettamax\.com\/?/g;

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
    try {
      const ct = (response.headers && response.headers['content-type']) || '';
      if (ct.includes('application/json') || typeof response.data === 'object') {
        deepReplaceStrings(response.data, TO_REMOVE_REGEX);
      } else if (typeof response.data === 'string') {
        // text/html, text/plain, etc.
        response.data = response.data.replace(TO_REMOVE_REGEX, '');
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

    await instance.put(result.signedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    return result.url;
  }
}

export const api = new ClientApi({
  BASE: OpenAPI.BASE,
});
export * from "./client";
