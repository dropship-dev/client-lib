import { ClientApi as _ClientApi, ApiError, OpenAPI } from "./client";
import axios from "axios";

if (process.env.NEXT_PUBLIC_API_URL) {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL;
}

if (!process.env.NEXT_PUBLIC_STORE_API_KEY) {
  throw new Error("NEXT_PUBLIC_STORE_API_KEY is not set");
}
OpenAPI.TOKEN = process.env.NEXT_PUBLIC_STORE_API_KEY

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

    await axios.put(result.signedUrl, file, {
      headers: {
        "Content-Type": file.type,
        "Content-Length": file.size,
      },
    });

    return result.url;
  }
}

export const api = new ClientApi({
  BASE: OpenAPI.BASE,
  TOKEN: OpenAPI.TOKEN,
});
export * from "./client";
