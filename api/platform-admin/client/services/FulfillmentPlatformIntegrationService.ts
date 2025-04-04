/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
}
