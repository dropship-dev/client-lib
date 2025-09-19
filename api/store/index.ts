import { ClientApi as _ClientApi, ApiError, OpenAPI } from "./client";
import axios from "axios";

if (process.env.API_URL) {
  OpenAPI.BASE = process.env.API_URL;
}

const regexPattern = process.env.CDN_URL || "";
const TO_REMOVE_REGEX = new RegExp(regexPattern, "g");

axios.interceptors.response.use(
  (response) => {
    try {
      const ct = (response.headers && response.headers['content-type']) || '';
      if (ct.includes('application/json') || typeof response.data === 'object') {
        if (response.data) {
          const dataString = JSON.stringify(response.data);
          response.data = JSON.parse(dataString.replace(TO_REMOVE_REGEX, ''));
        }
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
