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
import { CurrencyService } from './services/CurrencyService';
import { DefaultService } from './services/DefaultService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { FulfillmentPlatformIntegrationService } from './services/FulfillmentPlatformIntegrationService';
import { GroupPlatformVariantService } from './services/GroupPlatformVariantService';
import { NotificationService } from './services/NotificationService';
import { OrderService } from './services/OrderService';
import { OrderRefundsService } from './services/OrderRefundsService';
import { PaymentService } from './services/PaymentService';
import { PerformanceService } from './services/PerformanceService';
import { PermissionService } from './services/PermissionService';
import { PingPongAccountService } from './services/PingPongAccountService';
import { PingPongAccountV2Service } from './services/PingPongAccountV2Service';
import { PlatformProductService } from './services/PlatformProductService';
import { PlatformVariantService } from './services/PlatformVariantService';
import { ProductService } from './services/ProductService';
import { RequestPayoutService } from './services/RequestPayoutService';
import { RequestSourcingService } from './services/RequestSourcingService';
import { SettingService } from './services/SettingService';
import { StoreService } from './services/StoreService';
import { StoreTagService } from './services/StoreTagService';
import { TagService } from './services/TagService';
import { TaxService } from './services/TaxService';
import { ThemeLibraryService } from './services/ThemeLibraryService';
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
  public readonly currency: CurrencyService;
  public readonly default: DefaultService;
  public readonly fulfillmentAgency: FulfillmentAgencyService;
  public readonly fulfillmentPlatformIntegration: FulfillmentPlatformIntegrationService;
  public readonly groupPlatformVariant: GroupPlatformVariantService;
  public readonly notification: NotificationService;
  public readonly order: OrderService;
  public readonly orderRefunds: OrderRefundsService;
  public readonly payment: PaymentService;
  public readonly performance: PerformanceService;
  public readonly permission: PermissionService;
  public readonly pingPongAccount: PingPongAccountService;
  public readonly pingPongAccountV2: PingPongAccountV2Service;
  public readonly platformProduct: PlatformProductService;
  public readonly platformVariant: PlatformVariantService;
  public readonly product: ProductService;
  public readonly requestPayout: RequestPayoutService;
  public readonly requestSourcing: RequestSourcingService;
  public readonly setting: SettingService;
  public readonly store: StoreService;
  public readonly storeTag: StoreTagService;
  public readonly tag: TagService;
  public readonly tax: TaxService;
  public readonly themeLibrary: ThemeLibraryService;
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
    this.currency = new CurrencyService(this.request);
    this.default = new DefaultService(this.request);
    this.fulfillmentAgency = new FulfillmentAgencyService(this.request);
    this.fulfillmentPlatformIntegration = new FulfillmentPlatformIntegrationService(this.request);
    this.groupPlatformVariant = new GroupPlatformVariantService(this.request);
    this.notification = new NotificationService(this.request);
    this.order = new OrderService(this.request);
    this.orderRefunds = new OrderRefundsService(this.request);
    this.payment = new PaymentService(this.request);
    this.performance = new PerformanceService(this.request);
    this.permission = new PermissionService(this.request);
    this.pingPongAccount = new PingPongAccountService(this.request);
    this.pingPongAccountV2 = new PingPongAccountV2Service(this.request);
    this.platformProduct = new PlatformProductService(this.request);
    this.platformVariant = new PlatformVariantService(this.request);
    this.product = new ProductService(this.request);
    this.requestPayout = new RequestPayoutService(this.request);
    this.requestSourcing = new RequestSourcingService(this.request);
    this.setting = new SettingService(this.request);
    this.store = new StoreService(this.request);
    this.storeTag = new StoreTagService(this.request);
    this.tag = new TagService(this.request);
    this.tax = new TaxService(this.request);
    this.themeLibrary = new ThemeLibraryService(this.request);
    this.transaction = new TransactionService(this.request);
    this.upload = new UploadService(this.request);
    this.user = new UserService(this.request);
    this.variant = new VariantService(this.request);
    this.variantCombo = new VariantComboService(this.request);
    this.wallet = new WalletService(this.request);
  }
}

