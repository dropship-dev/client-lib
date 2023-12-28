/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { StoreProductPerformanceResp } from '../models/StoreProductPerformanceResp';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopProductByOrder } from '../models/TopProductByOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PerformanceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getRevenueOverTime({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<{
    revenues: Array<StoreRevenueOverTime>;
    period: Period;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/revenue-over-time',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getCrOverTime({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<{
    CR: {
      growth: number;
      value: number;
    };
    purchased: number;
    checkedOut: number;
    addedToCart: number;
    viewedProduct: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/cr-over-time',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns TopProductByOrder Ok
   * @throws ApiError
   */
  public getTopProductsByOrders({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
    limit = 10,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
    limit?: number,
  }): CancelablePromise<Array<TopProductByOrder>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/top-products-by-orders',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
        'limit': limit,
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
  public getPerformanceSummary({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<{
    AOV: {
      growth: number;
      value: number;
    };
    orders: {
      growth: number;
      value: number;
    };
    profit: {
      growth: number;
      value: number;
    };
    revenue: {
      growth: number;
      value: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/summary',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getProductPerformance({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
    productName,
    orderBy = 'revenue',
    order = 'DESC',
    pageSize = 20,
    nextPageIndex,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
    productName?: string,
    orderBy?: 'revenue' | 'name',
    order?: 'ASC' | 'DESC',
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<ProductPerformance>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/product',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
        'productName': productName,
        'orderBy': orderBy,
        'order': order,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
  public getStoreProductPerformance({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
    search,
    pageSize,
    nextPageIndex,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
    search?: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<StoreProductPerformanceResp>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/store-product',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
        'search': search,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
