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
if (process.env.API_URL) {
    client_1.OpenAPI.BASE = process.env.API_URL;
}
const regexPattern = process.env.CDN_URL || "";
const TO_REMOVE_REGEX = new RegExp(regexPattern, "g");
function deepReplaceStrings(value, re, seen = new WeakSet()) {
    if (value === null || value === undefined)
        return value;
    if (typeof value === "string") {
        return value.replace(re, "");
    }
    if (typeof value !== "object") {
        // number, boolean, symbol, function etc. — keep as is
        return value;
    }
    // protect against circular refs
    if (seen.has(value))
        return value;
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
        }
        catch (err) {
            // ignore single-field errors
        }
    }
    return value;
}
const originalFetch = global.fetch || fetch;
// Wrapped fetch with response processing
const interceptedFetch = async (...args) => {
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
        }
        else if (contentType.includes('text/')) {
            let text = await response.text();
            text = text.replace(TO_REMOVE_REGEX, '');
            return new Response(text, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            });
        }
        return response;
    }
    catch (err) {
        // Ignore processing errors and return original response
        return response;
    }
};
global.fetch = interceptedFetch;
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
