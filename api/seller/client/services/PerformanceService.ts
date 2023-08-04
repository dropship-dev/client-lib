/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductPerformance } from '../models/ProductPerformance';
import type { StoreRevenue } from '../models/StoreRevenue';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { TopStoreByRevenue } from '../models/TopStoreByRevenue';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PerformanceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns StoreRevenue Ok
   * @throws ApiError
   */
  public getRevenueOverTime({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-04T05:01:44.900Z',
    storeId,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<Array<StoreRevenue>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/revenue-over-time',
      query: {
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
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-04T05:01:44.901Z',
    storeId,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<{
    purchase: number;
    checkout: number;
    addToCart: number;
    viewProduct: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/cr-over-time',
      query: {
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
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-04T05:01:44.918Z',
    storeId,
    limit = 10,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
    limit?: number,
  }): CancelablePromise<Array<TopProductByOrder>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/top-products-by-orders',
      query: {
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
   * @returns TopStoreByRevenue Ok
   * @throws ApiError
   */
  public getTopStoresByRevenue({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-04T05:01:44.920Z',
    limit = 10,
  }: {
    startDate?: string,
    endDate?: string,
    limit?: number,
  }): CancelablePromise<Array<TopStoreByRevenue>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/top-store-by-revenue',
      query: {
        'startDate': startDate,
        'endDate': endDate,
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
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-04T05:01:44.927Z',
    storeId,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<{
    totalOrders: number;
    totalProfit: number;
    totalRevenue: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/summary',
      query: {
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
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-04T05:01:44.934Z',
    storeId,
    pageSize = 20,
    nextPageIndex,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
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
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
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
