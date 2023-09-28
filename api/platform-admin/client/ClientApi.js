"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const FulfillmentAgencyService_1 = require("./services/FulfillmentAgencyService");
const PerformanceService_1 = require("./services/PerformanceService");
const ThemeTemplateService_1 = require("./services/ThemeTemplateService");
const UploadService_1 = require("./services/UploadService");
class ClientApi {
    fulfillmentAgency;
    performance;
    themeTemplate;
    upload;
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
        this.fulfillmentAgency = new FulfillmentAgencyService_1.FulfillmentAgencyService(this.request);
        this.performance = new PerformanceService_1.PerformanceService(this.request);
        this.themeTemplate = new ThemeTemplateService_1.ThemeTemplateService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
    }
}
exports.ClientApi = ClientApi;
