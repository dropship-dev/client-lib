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
        return value;
    }
    if (seen.has(value))
        return value;
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
        }
        catch (err) {
            // ignore single-field errors
        }
    }
    return value;
}
const originalFetch = fetch;
const createInterceptedFetch = () => {
    const interceptedFetch = async (...args) => {
        try {
            const response = await originalFetch(...args);
            if (!(process.env.API_URL && args.length > 0 && args[0].toString().startsWith(process.env.API_URL))) {
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
                }
                else if (contentType.includes("text/")) {
                    const text = await clonedResponse.text();
                    const processedText = text.replace(TO_REMOVE_REGEX, "");
                    return new Response(processedText, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: response.headers,
                    });
                }
            }
            catch (err) {
                console.warn("Error processing fetch response:", err);
            }
            return response;
        }
        catch (error) {
            throw error;
        }
    };
    interceptedFetch.__original = originalFetch;
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
    }
    catch (error) {
        console.warn("Failed to setup fetch interceptor:", error);
    }
};
(() => {
    const isAlreadyIntercepted = (typeof globalThis !== "undefined" && globalThis.isFetchIntercepted) ||
        (typeof global !== "undefined" && global.isFetchIntercepted) ||
        (typeof window !== "undefined" && window.isFetchIntercepted) ||
        (typeof self !== "undefined" && self.isFetchIntercepted);
    if (!isAlreadyIntercepted) {
        setupFetchInterceptor();
    }
})();
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
            },
        });
        return result.url;
    }
}
exports.api = new ClientApi({
    BASE: client_1.OpenAPI.BASE,
    TOKEN: client_1.OpenAPI.TOKEN,
});
__exportStar(require("./client"), exports);
