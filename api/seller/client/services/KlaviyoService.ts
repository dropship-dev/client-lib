/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KlaviyoDto } from '../models/KlaviyoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class KlaviyoService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public createKlaviyo({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: KlaviyoDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/klaviyo',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getKlaviyo({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    secretKey: any;
    publishableKey: any;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/klaviyo',
      path: {
        'storeId': storeId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns KlaviyoDto Ok
   * @throws ApiError
   */
  public updateKlaviyo({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: KlaviyoDto,
  }): CancelablePromise<KlaviyoDto> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/klaviyo',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public deleteKlaviyo({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    salt: string;
    secretKey: string;
    publishableKey: string;
    status: boolean;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/klaviyo',
      path: {
        'storeId': storeId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
