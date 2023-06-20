"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AuthService_1 = require("./services/AuthService");
const CurrencyService_1 = require("./services/CurrencyService");
const DefaultService_1 = require("./services/DefaultService");
const OrderService_1 = require("./services/OrderService");
const PaymentService_1 = require("./services/PaymentService");
const PlatformProductService_1 = require("./services/PlatformProductService");
const PlatformVariantService_1 = require("./services/PlatformVariantService");
const ProductService_1 = require("./services/ProductService");
const ProductTagService_1 = require("./services/ProductTagService");
const SettingService_1 = require("./services/SettingService");
const StoreService_1 = require("./services/StoreService");
const ThemeTemplateService_1 = require("./services/ThemeTemplateService");
const TransactionService_1 = require("./services/TransactionService");
const UploadService_1 = require("./services/UploadService");
const UserService_1 = require("./services/UserService");
class ClientApi {
    auth;
    currency;
    default;
    order;
    payment;
    platformProduct;
    platformVariant;
    product;
    productTag;
    setting;
    store;
    themeTemplate;
    transaction;
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
        this.currency = new CurrencyService_1.CurrencyService(this.request);
        this.default = new DefaultService_1.DefaultService(this.request);
        this.order = new OrderService_1.OrderService(this.request);
        this.payment = new PaymentService_1.PaymentService(this.request);
        this.platformProduct = new PlatformProductService_1.PlatformProductService(this.request);
        this.platformVariant = new PlatformVariantService_1.PlatformVariantService(this.request);
        this.product = new ProductService_1.ProductService(this.request);
        this.productTag = new ProductTagService_1.ProductTagService(this.request);
        this.setting = new SettingService_1.SettingService(this.request);
        this.store = new StoreService_1.StoreService(this.request);
        this.themeTemplate = new ThemeTemplateService_1.ThemeTemplateService(this.request);
        this.transaction = new TransactionService_1.TransactionService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.user = new UserService_1.UserService(this.request);
    }
}
exports.ClientApi = ClientApi;
