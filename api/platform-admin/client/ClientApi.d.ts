import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AsyncTaskService } from './services/AsyncTaskService';
import { AuthService } from './services/AuthService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { NotificationService } from './services/NotificationService';
import { PerformanceService } from './services/PerformanceService';
import { ThemeTemplateService } from './services/ThemeTemplateService';
import { UploadService } from './services/UploadService';
import { UserService } from './services/UserService';
import { WebhookService } from './services/WebhookService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class ClientApi {
    readonly asyncTask: AsyncTaskService;
    readonly auth: AuthService;
    readonly fulfillmentAgency: FulfillmentAgencyService;
    readonly notification: NotificationService;
    readonly performance: PerformanceService;
    readonly themeTemplate: ThemeTemplateService;
    readonly upload: UploadService;
    readonly user: UserService;
    readonly webhook: WebhookService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
