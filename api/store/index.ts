import { ClientApi as _ClientApi, ApiError, OpenAPI } from "./client";

if (process.env.API_URL) {
  OpenAPI.BASE = process.env.API_URL;
}

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