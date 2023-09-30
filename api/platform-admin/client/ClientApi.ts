/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { FulfillmentAgencyService } from './services/FulfillmentAgencyService';
import { NotificationService } from './services/NotificationService';
import { PerformanceService } from './services/PerformanceService';
import { ThemeTemplateService } from './services/ThemeTemplateService';
import { UploadService } from './services/UploadService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ClientApi {

  public readonly fulfillmentAgency: FulfillmentAgencyService;
  public readonly notification: NotificationService;
  public readonly performance: PerformanceService;
  public readonly themeTemplate: ThemeTemplateService;
  public readonly upload: UploadService;

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

    this.fulfillmentAgency = new FulfillmentAgencyService(this.request);
    this.notification = new NotificationService(this.request);
    this.performance = new PerformanceService(this.request);
    this.themeTemplate = new ThemeTemplateService(this.request);
    this.upload = new UploadService(this.request);
  }
}

