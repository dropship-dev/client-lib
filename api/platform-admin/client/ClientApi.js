"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AsyncTaskService_1 = require("./services/AsyncTaskService");
const AuthService_1 = require("./services/AuthService");
const FulfillmentAgencyService_1 = require("./services/FulfillmentAgencyService");
const MarketingService_1 = require("./services/MarketingService");
const MarketingEmailService_1 = require("./services/MarketingEmailService");
const NotificationService_1 = require("./services/NotificationService");
const PerformanceService_1 = require("./services/PerformanceService");
const PermissionService_1 = require("./services/PermissionService");
const ReferralService_1 = require("./services/ReferralService");
const SettingService_1 = require("./services/SettingService");
const StatisticsService_1 = require("./services/StatisticsService");
const SubscriptionService_1 = require("./services/SubscriptionService");
const UploadService_1 = require("./services/UploadService");
const UserService_1 = require("./services/UserService");
class ClientApi {
    asyncTask;
    auth;
    fulfillmentAgency;
    marketing;
    marketingEmail;
    notification;
    performance;
    permission;
    referral;
    setting;
    statistics;
    subscription;
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
        this.marketing = new MarketingService_1.MarketingService(this.request);
        this.marketingEmail = new MarketingEmailService_1.MarketingEmailService(this.request);
        this.notification = new NotificationService_1.NotificationService(this.request);
        this.performance = new PerformanceService_1.PerformanceService(this.request);
        this.permission = new PermissionService_1.PermissionService(this.request);
        this.referral = new ReferralService_1.ReferralService(this.request);
        this.setting = new SettingService_1.SettingService(this.request);
        this.statistics = new StatisticsService_1.StatisticsService(this.request);
        this.subscription = new SubscriptionService_1.SubscriptionService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.user = new UserService_1.UserService(this.request);
    }
}
exports.ClientApi = ClientApi;
