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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const firebase_1 = require("../../lib/firebase");
const client_1 = require("./client");
const axios_1 = __importDefault(require("axios"));
if (process.env.NEXT_PUBLIC_API_URL) {
    client_1.OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL;
}
const instance = axios_1.default.create();
axios_1.default.interceptors.request.use(async function (config) {
    try {
        const token = await (0, firebase_1.getToken)();
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${token}`;
    }
    catch (error) {
        console.error(error);
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
const TO_REMOVE_REGEX = /https?:\/\/cdn\.bettamax\.com\/?|cdn\.bettamax\.com\/?/g;
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
axios_1.default.interceptors.response.use((response) => {
    console.log("run in response interceptors");
    try {
        const ct = (response.headers && response.headers['content-type']) || '';
        if (ct.includes('application/json') || typeof response.data === 'object') {
            deepReplaceStrings(response.data, TO_REMOVE_REGEX);
            console.log("response.data", response.data);
        }
        else if (typeof response.data === 'string') {
            // text/html, text/plain, etc.
            response.data = response.data.replace(TO_REMOVE_REGEX, '');
            console.log("response.data", response.data);
        }
    }
    catch (err) { }
    return response;
}, (error) => Promise.reject(error));
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
        await instance.put(result.signedUrl, file, {
            headers: {
                "Content-Type": file.type,
            },
        });
        return result.url;
    }
}
exports.api = new ClientApi({
    BASE: client_1.OpenAPI.BASE,
});
__exportStar(require("./client"), exports);
