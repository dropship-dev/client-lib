import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AuthService } from './services/AuthService';
import { MarketingService } from './services/MarketingService';
import { UploadService } from './services/UploadService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class ClientApi {
    readonly auth: AuthService;
    readonly marketing: MarketingService;
    readonly upload: UploadService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
