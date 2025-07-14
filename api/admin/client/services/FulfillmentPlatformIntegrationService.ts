/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { SearchBettaSupSellersResponse } from '../models/SearchBettaSupSellersResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FulfillmentPlatformIntegrationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns SearchBettaSupSellersResponse Ok
   * @throws ApiError
   */
  public searchSellersOnBettaSup({
    cursor,
    pageSize = 20,
    email,
  }: {
    cursor?: string,
    pageSize?: number,
    email?: string,
  }): CancelablePromise<SearchBettaSupSellersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-platform-integration/bettasup-sellers',
      query: {
        'cursor': cursor,
        'pageSize': pageSize,
        'email': email,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getProductDataFromProductUrl({
    xBettamaxApiKey,
    url,
  }: {
    xBettamaxApiKey: string,
    url: string,
  }): CancelablePromise<{
    variantOptions: PrismaJson_VariantOptions;
    description: string;
    photos: PrismaJson_Photos;
    name: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-platform-integration/product-data-by-permalink',
      headers: {
        'x-bettamax-api-key': xBettamaxApiKey,
      },
      query: {
        'url': url,
      },
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
