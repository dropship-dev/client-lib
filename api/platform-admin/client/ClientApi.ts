/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AsyncTaskService } from './services/AsyncTaskService';
import { AuthService } from './services/AuthService';
import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { FulfillmentPlatformIntegrationService } from './services/FulfillmentPlatformIntegrationService';
import { MarketingService } from './services/MarketingService';
import { MarketingEmailService } from './services/MarketingEmailService';
import { NotificationService } from './services/NotificationService';
import { PerformanceService } from './services/PerformanceService';
import { PermissionService } from './services/PermissionService';
import { ReferralService } from './services/ReferralService';
import { SaleService } from './services/SaleService';
import { SettingService } from './services/SettingService';
import { StatisticsService } from './services/StatisticsService';
import { SubscriptionService } from './services/SubscriptionService';
import { UploadService } from './services/UploadService';
import { UserService } from './services/UserService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ClientApi {
  public readonly asyncTask: AsyncTaskService;
  public readonly auth: AuthService;
  public readonly fulfillmentAgency: FulfillmentAgencyService;
  public readonly fulfillmentPlatformIntegration: FulfillmentPlatformIntegrationService;
  public readonly marketing: MarketingService;
  public readonly marketingEmail: MarketingEmailService;
  public readonly notification: NotificationService;
  public readonly performance: PerformanceService;
  public readonly permission: PermissionService;
  public readonly referral: ReferralService;
  public readonly sale: SaleService;
  public readonly setting: SettingService;
  public readonly statistics: StatisticsService;
  public readonly subscription: SubscriptionService;
  public readonly upload: UploadService;
  public readonly user: UserService;
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
    this.fulfillmentAgency = new FulfillmentAgencyService(this.request);
    this.fulfillmentPlatformIntegration = new FulfillmentPlatformIntegrationService(this.request);
    this.marketing = new MarketingService(this.request);
    this.marketingEmail = new MarketingEmailService(this.request);
    this.notification = new NotificationService(this.request);
    this.performance = new PerformanceService(this.request);
    this.permission = new PermissionService(this.request);
    this.referral = new ReferralService(this.request);
    this.sale = new SaleService(this.request);
    this.setting = new SettingService(this.request);
    this.statistics = new StatisticsService(this.request);
    this.subscription = new SubscriptionService(this.request);
    this.upload = new UploadService(this.request);
    this.user = new UserService(this.request);
  }
}

