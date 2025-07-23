/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetCustomerTrackingResultDto } from '../models/GetCustomerTrackingResultDto';
import type { GetPaginateTopLandingPageResultDto } from '../models/GetPaginateTopLandingPageResultDto';
import type { GetTrackingRetentionRateResultDto } from '../models/GetTrackingRetentionRateResultDto';
import type { LiveCoordinates } from '../models/LiveCoordinates';
import type { LocationResult } from '../models/LocationResult';
import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { ResponseTrackingPie } from '../models/ResponseTrackingPie';
import type { StoreProductPerformanceResp } from '../models/StoreProductPerformanceResp';
import type { StoreProductProfit } from '../models/StoreProductProfit';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { UTMSourceSchema } from '../models/UTMSourceSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PerformanceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns LocationResult Ok
   * @throws ApiError
   */
  public getProductByLocation({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<Array<LocationResult>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/top-locations',
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
  public getLiveVisitor({
    storeId,
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    coordinates: LiveCoordinates;
    viewer: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/visitor',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
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
  public getRevenueOverTime({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
    referralCode,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
    referralCode?: string,
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
        'referralCode': referralCode,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getCrOverTimeV2({
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
      url: '/performance/cr-over-time-v2',
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
  }): CancelablePromise<({
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
  } | {
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
    revenueWithTax: {
      growth: number;
      value: number;
    };
    revenue: {
      growth: number;
      value: number;
    };
  })> {
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
    pageSize = 20,
    nextPageIndex,
  }: {
    fulfillmentAgencyId?: number,
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
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  /**
   * @returns StoreProductProfit Ok
   * @throws ApiError
   */
  public getStoreProductProfit({
    fulfillmentAgencyId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    storeId,
    search,
  }: {
    fulfillmentAgencyId?: number,
    startDate?: string,
    endDate?: string,
    storeId?: string,
    search?: string,
  }): CancelablePromise<StoreProductProfit> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/store-product/profit',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
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
  /**
   * @returns ResponseTrackingPie Ok
   * @throws ApiError
   */
  public getTopCountry({
    storeId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    select,
  }: {
    storeId: string,
    startDate?: string,
    endDate?: string,
    select?: number,
  }): CancelablePromise<ResponseTrackingPie> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/top-country',
      query: {
        'storeId': storeId,
        'startDate': startDate,
        'endDate': endDate,
        'select': select,
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
   * @returns ResponseTrackingPie Ok
   * @throws ApiError
   */
  public statsDevice({
    storeId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
  }: {
    storeId: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<ResponseTrackingPie> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/stats-device',
      query: {
        'storeId': storeId,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns ResponseTrackingPie Ok
   * @throws ApiError
   */
  public statsReferrer({
    storeId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
  }: {
    storeId: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<ResponseTrackingPie> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/stats-referrer',
      query: {
        'storeId': storeId,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns GetCustomerTrackingResultDto Ok
   * @throws ApiError
   */
  public getCustomerTracking({
    storeId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    filterBy,
  }: {
    storeId: string,
    startDate?: string,
    endDate?: string,
    filterBy?: 'ORDER' | 'REVENUE',
  }): CancelablePromise<GetCustomerTrackingResultDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/customer-tracking',
      query: {
        'storeId': storeId,
        'startDate': startDate,
        'endDate': endDate,
        'filterBy': filterBy,
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
   * @returns GetTrackingRetentionRateResultDto Ok
   * @throws ApiError
   */
  public getTrackingRetentionRate({
    storeId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
  }: {
    storeId: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<GetTrackingRetentionRateResultDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/tracking-retention-rate',
      query: {
        'storeId': storeId,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns GetPaginateTopLandingPageResultDto Ok
   * @throws ApiError
   */
  public getTopLandingPage({
    storeId,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    limit = 6,
    cursor,
  }: {
    storeId: string,
    startDate?: string,
    endDate?: string,
    limit?: number,
    cursor?: string,
  }): CancelablePromise<GetPaginateTopLandingPageResultDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/top-landing-page',
      query: {
        'storeId': storeId,
        'startDate': startDate,
        'endDate': endDate,
        'limit': limit,
        'cursor': cursor,
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
  public getTrafficSource({
    storeId,
    source,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    cursor,
    limit,
  }: {
    storeId: string,
    source: UTMSourceSchema,
    startDate?: string,
    endDate?: string,
    cursor?: string,
    limit?: number,
  }): CancelablePromise<{
    preCursor: boolean;
    nextCursor: string;
    data: Array<{
      CR: number;
      viewed: number;
      purchased: number;
      subTotal: number;
      AOI: number;
      AOV: number;
      checkedOut: number;
      addedToCart: number;
      name: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/traffic-source',
      query: {
        'storeId': storeId,
        'source': source,
        'startDate': startDate,
        'endDate': endDate,
        'cursor': cursor,
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
}
