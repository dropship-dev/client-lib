/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { AddRefCodeDto } from '../models/AddRefCodeDto';
import type { FilterStoreReferral } from '../models/FilterStoreReferral';
import type { FilterStoreStatus } from '../models/FilterStoreStatus';
import type { GetRevenueStoreByFulfillmentResult } from '../models/GetRevenueStoreByFulfillmentResult';
import type { GetSummaryReferralResult } from '../models/GetSummaryReferralResult';
import type { GetTopRevenueStore } from '../models/GetTopRevenueStore';
import type { ReferralStoreType } from '../models/ReferralStoreType';
import type { SalePerformanceResponsive } from '../models/SalePerformanceResponsive';
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
   * @returns SalePerformanceResponsive Ok
   * @throws ApiError
   */
  public getSalePerformance({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    search,
  }: {
    startDate?: string,
    endDate?: string,
    search?: string,
  }): CancelablePromise<SalePerformanceResponsive> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/sale-performance',
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
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<GetRevenueStoreByFulfillmentResult> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/revenue-store-by-fulfillment',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getGmvPerFulfillmentAgency({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
  }: {
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    total: number;
    data: Array<{
      percentOfTotal: number;
      growth: number;
      gmv: number;
      name: string;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/gmv-per-fulfillment',
      query: {
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
  public detailGmvPerFulfillmentAgency({
    fulfillmentId,
    search,
    cursor,
    limit,
    status,
  }: {
    fulfillmentId: number,
    search?: string,
    cursor?: string,
    limit?: number,
    status?: FilterStoreStatus,
  }): CancelablePromise<{
    total: number;
    preCursor: boolean;
    nextCursor: string;
    data: Array<{
      createdAt: string;
      onboarding?: boolean;
      status: _36_Enums_StoreStatus;
      name: string;
      id: string;
      revenue: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/gmv-per-fulfillment/{fulfillmentId}',
      path: {
        'fulfillmentId': fulfillmentId,
      },
      query: {
        'search': search,
        'cursor': cursor,
        'limit': limit,
        'status': status,
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
  public getGmvByStore({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
  }: {
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    total: number;
    data: Array<{
      totalStore: number;
      percentOfTotal: number;
      growth: number;
      gmv: number;
      name: ReferralStoreType;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/gmv-by-store',
      query: {
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
  public topReferralSale({
    search,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    limit,
    cursor,
  }: {
    search?: string,
    startDate?: string,
    endDate?: string,
    limit?: number,
    cursor?: string,
  }): CancelablePromise<{
    total: number;
    preCursor: boolean;
    nextCursor: string;
    data: Array<{
      name: string;
      code: string;
      purchased: number;
      totalStore: number;
      id: number;
      gmvSharePerSale: number;
      gmv: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/top-referral-sale',
      query: {
        'search': search,
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
  public getStoreManagement({
    search,
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    limit,
    cursor,
    type,
  }: {
    search?: string,
    startDate?: string,
    endDate?: string,
    limit?: number,
    cursor?: string,
    type?: FilterStoreReferral,
  }): CancelablePromise<{
    total: number;
    preCursor: boolean;
    nextCursor: string;
    data: Array<{
      purchased: number;
      id: string;
      aov: number;
      gmvSharePerSale: number;
      gmv: number;
      saleName: string;
      refCode: string;
      fulfillmentAgencyName: string;
      name: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/store-management',
      query: {
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'limit': limit,
        'cursor': cursor,
        'type': type,
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
   * @returns string Ok
   * @throws ApiError
   */
  public addRefCode({
    requestBody,
  }: {
    requestBody: AddRefCodeDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/referral/ref-code',
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
   * @returns string Ok
   * @throws ApiError
   */
  public updateRefCode({
    requestBody,
  }: {
    requestBody: AddRefCodeDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/referral/ref-code',
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
  public getListSellerBySale({
    saleId,
    nextPageIndex,
    pageSize = 20,
    keyword,
    startDate,
    endDate,
  }: {
    saleId: number,
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      totalStore: number;
      revenue: number;
      createdAt: string;
      phone: string;
      name: string;
      email: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/referral/seller-by-sale/{saleId}',
      path: {
        'saleId': saleId,
      },
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'keyword': keyword,
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
}
