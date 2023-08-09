/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { TopStoreByRevenue } from '../models/TopStoreByRevenue';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PerformanceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getRevenueOverTime({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-09T10:18:21.632Z',
    storeId,
  }: {
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
    endDate = '2023-08-09T10:18:21.643Z',
    storeId,
  }: {
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
    endDate = '2023-08-09T10:18:21.661Z',
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
    endDate = '2023-08-09T10:18:21.662Z',
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
    endDate = '2023-08-09T10:18:21.677Z',
    storeId,
  }: {
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
    endDate = '2023-08-09T10:18:21.683Z',
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
