"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const client_1 = require("./client");
if (process.env.NEXT_PUBLIC_API_URL) {
    client_1.OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL;
}
class ClientApi extends client_1.ClientApi {
    async uploadFile(file) {
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
        }
        catch (e) {
            if (e instanceof client_1.ApiError) {
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
        });
        return result.url;
    }
}
exports.api = new ClientApi({
    BASE: client_1.OpenAPI.BASE,
    TOKEN: client_1.OpenAPI.TOKEN,
});
__exportStar(require("./client"), exports);
