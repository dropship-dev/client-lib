/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AuthService } from './services/AuthService';
import { CurrencyService } from './services/CurrencyService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { NotificationService } from './services/NotificationService';
import { OrderService } from './services/OrderService';
import { PaymentService } from './services/PaymentService';
import { PerformanceService } from './services/PerformanceService';
import { PlatformProductService } from './services/PlatformProductService';
import { PlatformVariantService } from './services/PlatformVariantService';
import { ProductService } from './services/ProductService';
import { RequestSourcingService } from './services/RequestSourcingService';
import { SettingService } from './services/SettingService';
import { StoreService } from './services/StoreService';
import { StoreTagService } from './services/StoreTagService';
import { TagService } from './services/TagService';
import { ThemeTemplateService } from './services/ThemeTemplateService';
import { TransactionService } from './services/TransactionService';
import { UploadService } from './services/UploadService';
import { UserService } from './services/UserService';
import { VariantService } from './services/VariantService';
import { VariantComboService } from './services/VariantComboService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ClientApi {

  public readonly auth: AuthService;
  public readonly currency: CurrencyService;
  public readonly fulfillmentAgency: FulfillmentAgencyService;
  public readonly notification: NotificationService;
  public readonly order: OrderService;
  public readonly payment: PaymentService;
  public readonly performance: PerformanceService;
  public readonly platformProduct: PlatformProductService;
  public readonly platformVariant: PlatformVariantService;
  public readonly product: ProductService;
  public readonly requestSourcing: RequestSourcingService;
  public readonly setting: SettingService;
  public readonly store: StoreService;
  public readonly storeTag: StoreTagService;
  public readonly tag: TagService;
  public readonly themeTemplate: ThemeTemplateService;
  public readonly transaction: TransactionService;
  public readonly upload: UploadService;
  public readonly user: UserService;
  public readonly variant: VariantService;
  public readonly variantCombo: VariantComboService;

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

    this.auth = new AuthService(this.request);
    this.currency = new CurrencyService(this.request);
    this.fulfillmentAgency = new FulfillmentAgencyService(this.request);
    this.notification = new NotificationService(this.request);
    this.order = new OrderService(this.request);
    this.payment = new PaymentService(this.request);
    this.performance = new PerformanceService(this.request);
    this.platformProduct = new PlatformProductService(this.request);
    this.platformVariant = new PlatformVariantService(this.request);
    this.product = new ProductService(this.request);
    this.requestSourcing = new RequestSourcingService(this.request);
    this.setting = new SettingService(this.request);
    this.store = new StoreService(this.request);
    this.storeTag = new StoreTagService(this.request);
    this.tag = new TagService(this.request);
    this.themeTemplate = new ThemeTemplateService(this.request);
    this.transaction = new TransactionService(this.request);
    this.upload = new UploadService(this.request);
    this.user = new UserService(this.request);
    this.variant = new VariantService(this.request);
    this.variantCombo = new VariantComboService(this.request);
  }
}

