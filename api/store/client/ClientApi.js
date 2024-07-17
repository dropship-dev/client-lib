"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const FetchHttpRequest_1 = require("./core/FetchHttpRequest");
const BankAccountService_1 = require("./services/BankAccountService");
const CollectionService_1 = require("./services/CollectionService");
const CrossSellService_1 = require("./services/CrossSellService");
const CurrencyService_1 = require("./services/CurrencyService");
const OrderService_1 = require("./services/OrderService");
const ProductService_1 = require("./services/ProductService");
const RequestPayoutService_1 = require("./services/RequestPayoutService");
const ReviewService_1 = require("./services/ReviewService");
const SettingService_1 = require("./services/SettingService");
const StoreService_1 = require("./services/StoreService");
const StoreTagService_1 = require("./services/StoreTagService");
const ThemeService_1 = require("./services/ThemeService");
const UploadService_1 = require("./services/UploadService");
const VariantService_1 = require("./services/VariantService");
const VariantComboService_1 = require("./services/VariantComboService");
const WalletService_1 = require("./services/WalletService");
class ClientApi {
    bankAccount;
    collection;
    crossSell;
    currency;
    order;
    product;
    requestPayout;
    review;
    setting;
    store;
    storeTag;
    theme;
    upload;
    variant;
    variantCombo;
    wallet;
    request;
    constructor(config, HttpRequest = FetchHttpRequest_1.FetchHttpRequest) {
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
        this.bankAccount = new BankAccountService_1.BankAccountService(this.request);
        this.collection = new CollectionService_1.CollectionService(this.request);
        this.crossSell = new CrossSellService_1.CrossSellService(this.request);
        this.currency = new CurrencyService_1.CurrencyService(this.request);
        this.order = new OrderService_1.OrderService(this.request);
        this.product = new ProductService_1.ProductService(this.request);
        this.requestPayout = new RequestPayoutService_1.RequestPayoutService(this.request);
        this.review = new ReviewService_1.ReviewService(this.request);
        this.setting = new SettingService_1.SettingService(this.request);
        this.store = new StoreService_1.StoreService(this.request);
        this.storeTag = new StoreTagService_1.StoreTagService(this.request);
        this.theme = new ThemeService_1.ThemeService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.variant = new VariantService_1.VariantService(this.request);
        this.variantCombo = new VariantComboService_1.VariantComboService(this.request);
        this.wallet = new WalletService_1.WalletService(this.request);
    }
}
exports.ClientApi = ClientApi;
