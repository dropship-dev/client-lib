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
