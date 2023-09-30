import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { PerformanceService } from './services/PerformanceService';
import { ThemeTemplateService } from './services/ThemeTemplateService';
import { UploadService } from './services/UploadService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class ClientApi {
    readonly performance: PerformanceService;
    readonly themeTemplate: ThemeTemplateService;
    readonly upload: UploadService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
