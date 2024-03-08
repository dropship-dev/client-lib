"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AsyncTaskService_1 = require("./services/AsyncTaskService");
const AuthService_1 = require("./services/AuthService");
const BankAccountService_1 = require("./services/BankAccountService");
const CurrencyService_1 = require("./services/CurrencyService");
const FulfillmentAgencyService_1 = require("./services/FulfillmentAgencyService");
const GroupPlatformVariantService_1 = require("./services/GroupPlatformVariantService");
const NotificationService_1 = require("./services/NotificationService");
const OrderService_1 = require("./services/OrderService");
const OrderRefundsService_1 = require("./services/OrderRefundsService");
const PaymentService_1 = require("./services/PaymentService");
const PerformanceService_1 = require("./services/PerformanceService");
const PingPongAccountService_1 = require("./services/PingPongAccountService");
const PlatformProductService_1 = require("./services/PlatformProductService");
const PlatformVariantService_1 = require("./services/PlatformVariantService");
const ProductService_1 = require("./services/ProductService");
const RequestPayoutService_1 = require("./services/RequestPayoutService");
const RequestSourcingService_1 = require("./services/RequestSourcingService");
const SettingService_1 = require("./services/SettingService");
const StoreService_1 = require("./services/StoreService");
const StoreTagService_1 = require("./services/StoreTagService");
const TagService_1 = require("./services/TagService");
const ThemeTemplateService_1 = require("./services/ThemeTemplateService");
const TransactionService_1 = require("./services/TransactionService");
const UploadService_1 = require("./services/UploadService");
const UserService_1 = require("./services/UserService");
const VariantService_1 = require("./services/VariantService");
const VariantComboService_1 = require("./services/VariantComboService");
const WalletService_1 = require("./services/WalletService");
class ClientApi {
    asyncTask;
    auth;
    bankAccount;
    currency;
    fulfillmentAgency;
    groupPlatformVariant;
    notification;
    order;
    orderRefunds;
    payment;
    performance;
    pingPongAccount;
    platformProduct;
    platformVariant;
    product;
    requestPayout;
    requestSourcing;
    setting;
    store;
    storeTag;
    tag;
    themeTemplate;
    transaction;
    upload;
    user;
    variant;
    variantCombo;
    wallet;
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
        this.bankAccount = new BankAccountService_1.BankAccountService(this.request);
        this.currency = new CurrencyService_1.CurrencyService(this.request);
        this.fulfillmentAgency = new FulfillmentAgencyService_1.FulfillmentAgencyService(this.request);
        this.groupPlatformVariant = new GroupPlatformVariantService_1.GroupPlatformVariantService(this.request);
        this.notification = new NotificationService_1.NotificationService(this.request);
        this.order = new OrderService_1.OrderService(this.request);
        this.orderRefunds = new OrderRefundsService_1.OrderRefundsService(this.request);
        this.payment = new PaymentService_1.PaymentService(this.request);
        this.performance = new PerformanceService_1.PerformanceService(this.request);
        this.pingPongAccount = new PingPongAccountService_1.PingPongAccountService(this.request);
        this.platformProduct = new PlatformProductService_1.PlatformProductService(this.request);
        this.platformVariant = new PlatformVariantService_1.PlatformVariantService(this.request);
        this.product = new ProductService_1.ProductService(this.request);
        this.requestPayout = new RequestPayoutService_1.RequestPayoutService(this.request);
        this.requestSourcing = new RequestSourcingService_1.RequestSourcingService(this.request);
        this.setting = new SettingService_1.SettingService(this.request);
        this.store = new StoreService_1.StoreService(this.request);
        this.storeTag = new StoreTagService_1.StoreTagService(this.request);
        this.tag = new TagService_1.TagService(this.request);
        this.themeTemplate = new ThemeTemplateService_1.ThemeTemplateService(this.request);
        this.transaction = new TransactionService_1.TransactionService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.user = new UserService_1.UserService(this.request);
        this.variant = new VariantService_1.VariantService(this.request);
        this.variantCombo = new VariantComboService_1.VariantComboService(this.request);
        this.wallet = new WalletService_1.WalletService(this.request);
    }
}
exports.ClientApi = ClientApi;
