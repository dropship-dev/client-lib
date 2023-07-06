/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AuthService } from './services/AuthService';
import { CollectionService } from './services/CollectionService';
import { CurrencyService } from './services/CurrencyService';
import { DefaultService } from './services/DefaultService';
import { OrderService } from './services/OrderService';
import { ProductService } from './services/ProductService';
import { ReviewService } from './services/ReviewService';
import { SettingService } from './services/SettingService';
import { StaffService } from './services/StaffService';
import { StoreService } from './services/StoreService';
import { StoreTagService } from './services/StoreTagService';
import { ThemeService } from './services/ThemeService';
import { TransactionService } from './services/TransactionService';
import { UploadService } from './services/UploadService';
import { UserService } from './services/UserService';
import { VariantService } from './services/VariantService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ClientApi {

  public readonly auth: AuthService;
  public readonly collection: CollectionService;
  public readonly currency: CurrencyService;
  public readonly default: DefaultService;
  public readonly order: OrderService;
  public readonly product: ProductService;
  public readonly review: ReviewService;
  public readonly setting: SettingService;
  public readonly staff: StaffService;
  public readonly store: StoreService;
  public readonly storeTag: StoreTagService;
  public readonly theme: ThemeService;
  public readonly transaction: TransactionService;
  public readonly upload: UploadService;
  public readonly user: UserService;
  public readonly variant: VariantService;

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
    this.collection = new CollectionService(this.request);
    this.currency = new CurrencyService(this.request);
    this.default = new DefaultService(this.request);
    this.order = new OrderService(this.request);
    this.product = new ProductService(this.request);
    this.review = new ReviewService(this.request);
    this.setting = new SettingService(this.request);
    this.staff = new StaffService(this.request);
    this.store = new StoreService(this.request);
    this.storeTag = new StoreTagService(this.request);
    this.theme = new ThemeService(this.request);
    this.transaction = new TransactionService(this.request);
    this.upload = new UploadService(this.request);
    this.user = new UserService(this.request);
    this.variant = new VariantService(this.request);
  }
}

