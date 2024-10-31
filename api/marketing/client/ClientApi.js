"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AuthService_1 = require("./services/AuthService");
const MarketingService_1 = require("./services/MarketingService");
const UploadService_1 = require("./services/UploadService");
const UserService_1 = require("./services/UserService");
class ClientApi {
    auth;
    marketing;
    upload;
    user;
    request;
    constructor(config, HttpRequest = AxiosHttpRequest_1.AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.auth = new AuthService_1.AuthService(this.request);
        this.marketing = new MarketingService_1.MarketingService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.user = new UserService_1.UserService(this.request);
    }
}
exports.ClientApi = ClientApi;
