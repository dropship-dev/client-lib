import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AsyncTaskService } from './services/AsyncTaskService';
import { AuthService } from './services/AuthService';
import { DefaultService } from './services/DefaultService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { MarketingEmailService } from './services/MarketingEmailService';
import { NotificationService } from './services/NotificationService';
import { PerformanceService } from './services/PerformanceService';
import { StatisticsService } from './services/StatisticsService';
import { UploadService } from './services/UploadService';
import { UserService } from './services/UserService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class ClientApi {
    readonly asyncTask: AsyncTaskService;
    readonly auth: AuthService;
    readonly default: DefaultService;
    readonly fulfillmentAgency: FulfillmentAgencyService;
    readonly marketingEmail: MarketingEmailService;
    readonly notification: NotificationService;
    readonly performance: PerformanceService;
    readonly statistics: StatisticsService;
    readonly upload: UploadService;
    readonly user: UserService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
