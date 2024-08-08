"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AsyncTaskService_1 = require("./services/AsyncTaskService");
const AuthService_1 = require("./services/AuthService");
const BankAccountService_1 = require("./services/BankAccountService");
const CampaignService_1 = require("./services/CampaignService");
const CollectionService_1 = require("./services/CollectionService");
const CrossSellService_1 = require("./services/CrossSellService");
const CurrencyService_1 = require("./services/CurrencyService");
const DomainService_1 = require("./services/DomainService");
const FbPixelService_1 = require("./services/FbPixelService");
const FulfillmentAgencyService_1 = require("./services/FulfillmentAgencyService");
const GoogleAnalyticService_1 = require("./services/GoogleAnalyticService");
const MarketingEmailService_1 = require("./services/MarketingEmailService");
const NotificationService_1 = require("./services/NotificationService");
const OrderService_1 = require("./services/OrderService");
const OrderRefundsService_1 = require("./services/OrderRefundsService");
const PaymentService_1 = require("./services/PaymentService");
const PerformanceService_1 = require("./services/PerformanceService");
const PingPongAccountService_1 = require("./services/PingPongAccountService");
const PodCategoryService_1 = require("./services/PodCategoryService");
const PodDesignService_1 = require("./services/PodDesignService");
const PodElementService_1 = require("./services/PodElementService");
const PodTechniqueService_1 = require("./services/PodTechniqueService");
const PodTemplateService_1 = require("./services/PodTemplateService");
const ProductService_1 = require("./services/ProductService");
const RegionalShippingService_1 = require("./services/RegionalShippingService");
const RequestPayoutService_1 = require("./services/RequestPayoutService");
const RequestSourcingService_1 = require("./services/RequestSourcingService");
const ReviewService_1 = require("./services/ReviewService");
const SettingService_1 = require("./services/SettingService");
const StaffService_1 = require("./services/StaffService");
const StatisticsService_1 = require("./services/StatisticsService");
const StoreService_1 = require("./services/StoreService");
const StoreTagService_1 = require("./services/StoreTagService");
const ThemeService_1 = require("./services/ThemeService");
const ThemeLibraryService_1 = require("./services/ThemeLibraryService");
const TiktokPixelService_1 = require("./services/TiktokPixelService");
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
    campaign;
    collection;
    crossSell;
    currency;
    domain;
    fbPixel;
    fulfillmentAgency;
    googleAnalytic;
    marketingEmail;
    notification;
    order;
    orderRefunds;
    payment;
    performance;
    pingPongAccount;
    podCategory;
    podDesign;
    podElement;
    podTechnique;
    podTemplate;
    product;
    regionalShipping;
    requestPayout;
    requestSourcing;
    review;
    setting;
    staff;
    statistics;
    store;
    storeTag;
    theme;
    themeLibrary;
    tiktokPixel;
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
        this.campaign = new CampaignService_1.CampaignService(this.request);
        this.collection = new CollectionService_1.CollectionService(this.request);
        this.crossSell = new CrossSellService_1.CrossSellService(this.request);
        this.currency = new CurrencyService_1.CurrencyService(this.request);
        this.domain = new DomainService_1.DomainService(this.request);
        this.fbPixel = new FbPixelService_1.FbPixelService(this.request);
        this.fulfillmentAgency = new FulfillmentAgencyService_1.FulfillmentAgencyService(this.request);
        this.googleAnalytic = new GoogleAnalyticService_1.GoogleAnalyticService(this.request);
        this.marketingEmail = new MarketingEmailService_1.MarketingEmailService(this.request);
        this.notification = new NotificationService_1.NotificationService(this.request);
        this.order = new OrderService_1.OrderService(this.request);
        this.orderRefunds = new OrderRefundsService_1.OrderRefundsService(this.request);
        this.payment = new PaymentService_1.PaymentService(this.request);
        this.performance = new PerformanceService_1.PerformanceService(this.request);
        this.pingPongAccount = new PingPongAccountService_1.PingPongAccountService(this.request);
        this.podCategory = new PodCategoryService_1.PodCategoryService(this.request);
        this.podDesign = new PodDesignService_1.PodDesignService(this.request);
        this.podElement = new PodElementService_1.PodElementService(this.request);
        this.podTechnique = new PodTechniqueService_1.PodTechniqueService(this.request);
        this.podTemplate = new PodTemplateService_1.PodTemplateService(this.request);
        this.product = new ProductService_1.ProductService(this.request);
        this.regionalShipping = new RegionalShippingService_1.RegionalShippingService(this.request);
        this.requestPayout = new RequestPayoutService_1.RequestPayoutService(this.request);
        this.requestSourcing = new RequestSourcingService_1.RequestSourcingService(this.request);
        this.review = new ReviewService_1.ReviewService(this.request);
        this.setting = new SettingService_1.SettingService(this.request);
        this.staff = new StaffService_1.StaffService(this.request);
        this.statistics = new StatisticsService_1.StatisticsService(this.request);
        this.store = new StoreService_1.StoreService(this.request);
        this.storeTag = new StoreTagService_1.StoreTagService(this.request);
        this.theme = new ThemeService_1.ThemeService(this.request);
        this.themeLibrary = new ThemeLibraryService_1.ThemeLibraryService(this.request);
        this.tiktokPixel = new TiktokPixelService_1.TiktokPixelService(this.request);
        this.transaction = new TransactionService_1.TransactionService(this.request);
        this.upload = new UploadService_1.UploadService(this.request);
        this.user = new UserService_1.UserService(this.request);
        this.variant = new VariantService_1.VariantService(this.request);
        this.variantCombo = new VariantComboService_1.VariantComboService(this.request);
        this.wallet = new WalletService_1.WalletService(this.request);
    }
}
exports.ClientApi = ClientApi;
