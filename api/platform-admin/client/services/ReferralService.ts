/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetRevenueStoreByFulfillmentResult } from '../models/GetRevenueStoreByFulfillmentResult';
import type { GetSummaryReferralResult } from '../models/GetSummaryReferralResult';
import type { GetTopRevenueStore } from '../models/GetTopRevenueStore';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReferralService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns GetSummaryReferralResult Ok
   * @throws ApiError
   */
  public getSummary({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    search,
  }: {
    startDate?: string,
    endDate?: string,
    search?: string,
  }): CancelablePromise<GetSummaryReferralResult> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/summary',
      query: {
        'startDate': startDate,
        'endDate': endDate,
        'search': search,
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
   * @returns GetRevenueStoreByFulfillmentResult Ok
   * @throws ApiError
   */
  public getRevenueStoreByFulfillment({
    fulfillmentAgencyId,
    search,
  }: {
    fulfillmentAgencyId: number,
    search?: string,
  }): CancelablePromise<GetRevenueStoreByFulfillmentResult> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/revenue-store-by-fulfillment',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
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
   * @returns GetTopRevenueStore Ok
   * @throws ApiError
   */
  public getTopRevenueStore({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    search,
    topK = 10,
  }: {
    startDate?: string,
    endDate?: string,
    search?: string,
    topK?: number,
  }): CancelablePromise<GetTopRevenueStore> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/top-revenue-store',
      query: {
        'startDate': startDate,
        'endDate': endDate,
        'search': search,
        'topK': topK,
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
