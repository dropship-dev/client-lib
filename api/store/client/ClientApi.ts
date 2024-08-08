/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { BankAccountService } from './services/BankAccountService';
import { CollectionService } from './services/CollectionService';
import { CrossSellService } from './services/CrossSellService';
import { CurrencyService } from './services/CurrencyService';
import { MarketingEmailService } from './services/MarketingEmailService';
import { OrderService } from './services/OrderService';
import { OrderTrackingService } from './services/OrderTrackingService';
import { PodDesignService } from './services/PodDesignService';
import { ProductService } from './services/ProductService';
import { RequestPayoutService } from './services/RequestPayoutService';
import { ReviewService } from './services/ReviewService';
import { SettingService } from './services/SettingService';
import { StoreService } from './services/StoreService';
import { StoreTagService } from './services/StoreTagService';
import { ThemeService } from './services/ThemeService';
import { UploadService } from './services/UploadService';
import { VariantService } from './services/VariantService';
import { VariantComboService } from './services/VariantComboService';
import { WalletService } from './services/WalletService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ClientApi {

  public readonly bankAccount: BankAccountService;
  public readonly collection: CollectionService;
  public readonly crossSell: CrossSellService;
  public readonly currency: CurrencyService;
  public readonly marketingEmail: MarketingEmailService;
  public readonly order: OrderService;
  public readonly orderTracking: OrderTrackingService;
  public readonly podDesign: PodDesignService;
  public readonly product: ProductService;
  public readonly requestPayout: RequestPayoutService;
  public readonly review: ReviewService;
  public readonly setting: SettingService;
  public readonly store: StoreService;
  public readonly storeTag: StoreTagService;
  public readonly theme: ThemeService;
  public readonly upload: UploadService;
  public readonly variant: VariantService;
  public readonly variantCombo: VariantComboService;
  public readonly wallet: WalletService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
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

    this.bankAccount = new BankAccountService(this.request);
    this.collection = new CollectionService(this.request);
    this.crossSell = new CrossSellService(this.request);
    this.currency = new CurrencyService(this.request);
    this.marketingEmail = new MarketingEmailService(this.request);
    this.order = new OrderService(this.request);
    this.orderTracking = new OrderTrackingService(this.request);
    this.podDesign = new PodDesignService(this.request);
    this.product = new ProductService(this.request);
    this.requestPayout = new RequestPayoutService(this.request);
    this.review = new ReviewService(this.request);
    this.setting = new SettingService(this.request);
    this.store = new StoreService(this.request);
    this.storeTag = new StoreTagService(this.request);
    this.theme = new ThemeService(this.request);
    this.upload = new UploadService(this.request);
    this.variant = new VariantService(this.request);
    this.variantCombo = new VariantComboService(this.request);
    this.wallet = new WalletService(this.request);
  }
}

