"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AsyncTaskService_1 = require("./services/AsyncTaskService");
const AuthService_1 = require("./services/AuthService");
const FulfillmentAgencyService_1 = require("./services/FulfillmentAgencyService");
const MarketingEmailService_1 = require("./services/MarketingEmailService");
const NotificationService_1 = require("./services/NotificationService");
const PerformanceService_1 = require("./services/PerformanceService");
const StatisticsService_1 = require("./services/StatisticsService");
const UploadService_1 = require("./services/UploadService");
const UserService_1 = require("./services/UserService");
class ClientApi {
    asyncTask;
    auth;
    fulfillmentAgency;
    marketingEmail;
    notification;
    performance;
    statistics;
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
        this.asyncTask = new AsyncTaskService_1.AsyncTaskService(this.request);
        this.auth = new AuthService_1.AuthService(this.request);
        this.fulfillmentAgency = new FulfillmentAgencyService_1.FulfillmentAgencyService(this.request);
        this.marketingEmail = new MarketingEmailService_1.MarketingEmailService(this.request);
        this.notification = new NotificationService_1.NotificationService(this.request);
        this.performance = new PerformanceService_1.PerformanceService(this.request);
        this.statistics = new StatisticsService_1.StatisticsService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.user = new UserService_1.UserService(this.request);
    }
}
exports.ClientApi = ClientApi;
