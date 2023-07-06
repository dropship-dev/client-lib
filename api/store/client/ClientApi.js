"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const CollectionService_1 = require("./services/CollectionService");
const CurrencyService_1 = require("./services/CurrencyService");
const OrderService_1 = require("./services/OrderService");
const ProductService_1 = require("./services/ProductService");
const ReviewService_1 = require("./services/ReviewService");
const SettingService_1 = require("./services/SettingService");
const StoreService_1 = require("./services/StoreService");
const StoreTagService_1 = require("./services/StoreTagService");
const ThemeService_1 = require("./services/ThemeService");
const TransactionService_1 = require("./services/TransactionService");
const UploadService_1 = require("./services/UploadService");
const VariantService_1 = require("./services/VariantService");
class ClientApi {
    collection;
    currency;
    order;
    product;
    review;
    setting;
    store;
    storeTag;
    theme;
    transaction;
    upload;
    variant;
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
        this.collection = new CollectionService_1.CollectionService(this.request);
        this.currency = new CurrencyService_1.CurrencyService(this.request);
        this.order = new OrderService_1.OrderService(this.request);
        this.product = new ProductService_1.ProductService(this.request);
        this.review = new ReviewService_1.ReviewService(this.request);
        this.setting = new SettingService_1.SettingService(this.request);
        this.store = new StoreService_1.StoreService(this.request);
        this.storeTag = new StoreTagService_1.StoreTagService(this.request);
        this.theme = new ThemeService_1.ThemeService(this.request);
        this.transaction = new TransactionService_1.TransactionService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.variant = new VariantService_1.VariantService(this.request);
    }
}
exports.ClientApi = ClientApi;
