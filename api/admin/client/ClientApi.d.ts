import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AsyncTaskService } from './services/AsyncTaskService';
import { AuthService } from './services/AuthService';
import { CurrencyService } from './services/CurrencyService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { NotificationService } from './services/NotificationService';
import { OrderService } from './services/OrderService';
import { OrderRefundsService } from './services/OrderRefundsService';
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
export declare class ClientApi {
    readonly asyncTask: AsyncTaskService;
    readonly auth: AuthService;
    readonly currency: CurrencyService;
    readonly fulfillmentAgency: FulfillmentAgencyService;
    readonly notification: NotificationService;
    readonly order: OrderService;
    readonly orderRefunds: OrderRefundsService;
    readonly payment: PaymentService;
    readonly performance: PerformanceService;
    readonly platformProduct: PlatformProductService;
    readonly platformVariant: PlatformVariantService;
    readonly product: ProductService;
    readonly requestSourcing: RequestSourcingService;
    readonly setting: SettingService;
    readonly store: StoreService;
    readonly storeTag: StoreTagService;
    readonly tag: TagService;
    readonly themeTemplate: ThemeTemplateService;
    readonly transaction: TransactionService;
    readonly upload: UploadService;
    readonly user: UserService;
    readonly variant: VariantService;
    readonly variantCombo: VariantComboService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};