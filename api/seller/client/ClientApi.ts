/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AsyncTaskService } from './services/AsyncTaskService';
import { AuthService } from './services/AuthService';
import { BankAccountService } from './services/BankAccountService';
import { BoostSalesService } from './services/BoostSalesService';
import { CampaignService } from './services/CampaignService';
import { CollectionService } from './services/CollectionService';
import { CouponService } from './services/CouponService';
import { CurrencyService } from './services/CurrencyService';
import { DomainService } from './services/DomainService';
import { FbPixelService } from './services/FbPixelService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { GoogleAnalyticService } from './services/GoogleAnalyticService';
import { GoogleTagManagerService } from './services/GoogleTagManagerService';
import { KlaviyoService } from './services/KlaviyoService';
import { MarketingEmailService } from './services/MarketingEmailService';
import { NotificationService } from './services/NotificationService';
import { OrderService } from './services/OrderService';
import { OrderRefundsService } from './services/OrderRefundsService';
import { PaymentService } from './services/PaymentService';
import { PerformanceService } from './services/PerformanceService';
import { PermissionService } from './services/PermissionService';
import { PingPongAccountService } from './services/PingPongAccountService';
import { ProductService } from './services/ProductService';
import { RegionalShippingService } from './services/RegionalShippingService';
import { RequestPayoutService } from './services/RequestPayoutService';
import { RequestSourcingService } from './services/RequestSourcingService';
import { ReviewService } from './services/ReviewService';
import { SettingService } from './services/SettingService';
import { SnapChatPixelService } from './services/SnapChatPixelService';
import { StaffService } from './services/StaffService';
import { StatisticsService } from './services/StatisticsService';
import { StoreService } from './services/StoreService';
import { StoreTagService } from './services/StoreTagService';
import { SubscriptionService } from './services/SubscriptionService';
import { ThemeService } from './services/ThemeService';
import { ThemeLibraryService } from './services/ThemeLibraryService';
import { TiktokPixelService } from './services/TiktokPixelService';
import { TransactionService } from './services/TransactionService';
import { UploadService } from './services/UploadService';
import { UserService } from './services/UserService';
import { VariantService } from './services/VariantService';
import { VariantComboService } from './services/VariantComboService';
import { WalletService } from './services/WalletService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ClientApi {
  public readonly asyncTask: AsyncTaskService;
  public readonly auth: AuthService;
  public readonly bankAccount: BankAccountService;
  public readonly boostSales: BoostSalesService;
  public readonly campaign: CampaignService;
  public readonly collection: CollectionService;
  public readonly coupon: CouponService;
  public readonly currency: CurrencyService;
  public readonly domain: DomainService;
  public readonly fbPixel: FbPixelService;
  public readonly fulfillmentAgency: FulfillmentAgencyService;
  public readonly googleAnalytic: GoogleAnalyticService;
  public readonly googleTagManager: GoogleTagManagerService;
  public readonly klaviyo: KlaviyoService;
  public readonly marketingEmail: MarketingEmailService;
  public readonly notification: NotificationService;
  public readonly order: OrderService;
  public readonly orderRefunds: OrderRefundsService;
  public readonly payment: PaymentService;
  public readonly performance: PerformanceService;
  public readonly permission: PermissionService;
  public readonly pingPongAccount: PingPongAccountService;
  public readonly product: ProductService;
  public readonly regionalShipping: RegionalShippingService;
  public readonly requestPayout: RequestPayoutService;
  public readonly requestSourcing: RequestSourcingService;
  public readonly review: ReviewService;
  public readonly setting: SettingService;
  public readonly snapChatPixel: SnapChatPixelService;
  public readonly staff: StaffService;
  public readonly statistics: StatisticsService;
  public readonly store: StoreService;
  public readonly storeTag: StoreTagService;
  public readonly subscription: SubscriptionService;
  public readonly theme: ThemeService;
  public readonly themeLibrary: ThemeLibraryService;
  public readonly tiktokPixel: TiktokPixelService;
  public readonly transaction: TransactionService;
  public readonly upload: UploadService;
  public readonly user: UserService;
  public readonly variant: VariantService;
  public readonly variantCombo: VariantComboService;
  public readonly wallet: WalletService;
  public readonly request: BaseHttpRequest;
  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
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
    this.asyncTask = new AsyncTaskService(this.request);
    this.auth = new AuthService(this.request);
    this.bankAccount = new BankAccountService(this.request);
    this.boostSales = new BoostSalesService(this.request);
    this.campaign = new CampaignService(this.request);
    this.collection = new CollectionService(this.request);
    this.coupon = new CouponService(this.request);
    this.currency = new CurrencyService(this.request);
    this.domain = new DomainService(this.request);
    this.fbPixel = new FbPixelService(this.request);
    this.fulfillmentAgency = new FulfillmentAgencyService(this.request);
    this.googleAnalytic = new GoogleAnalyticService(this.request);
    this.googleTagManager = new GoogleTagManagerService(this.request);
    this.klaviyo = new KlaviyoService(this.request);
    this.marketingEmail = new MarketingEmailService(this.request);
    this.notification = new NotificationService(this.request);
    this.order = new OrderService(this.request);
    this.orderRefunds = new OrderRefundsService(this.request);
    this.payment = new PaymentService(this.request);
    this.performance = new PerformanceService(this.request);
    this.permission = new PermissionService(this.request);
    this.pingPongAccount = new PingPongAccountService(this.request);
    this.product = new ProductService(this.request);
    this.regionalShipping = new RegionalShippingService(this.request);
    this.requestPayout = new RequestPayoutService(this.request);
    this.requestSourcing = new RequestSourcingService(this.request);
    this.review = new ReviewService(this.request);
    this.setting = new SettingService(this.request);
    this.snapChatPixel = new SnapChatPixelService(this.request);
    this.staff = new StaffService(this.request);
    this.statistics = new StatisticsService(this.request);
    this.store = new StoreService(this.request);
    this.storeTag = new StoreTagService(this.request);
    this.subscription = new SubscriptionService(this.request);
    this.theme = new ThemeService(this.request);
    this.themeLibrary = new ThemeLibraryService(this.request);
    this.tiktokPixel = new TiktokPixelService(this.request);
    this.transaction = new TransactionService(this.request);
    this.upload = new UploadService(this.request);
    this.user = new UserService(this.request);
    this.variant = new VariantService(this.request);
    this.variantCombo = new VariantComboService(this.request);
    this.wallet = new WalletService(this.request);
  }
}

