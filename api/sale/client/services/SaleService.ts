/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { FilterStoreStatus } from '../models/FilterStoreStatus';
import type { sortTrackingPerformance } from '../models/sortTrackingPerformance';
import type { UpdateRequestStatusDto } from '../models/UpdateRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SaleService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getSaleInfo(): CancelablePromise<{
    name: string;
    referralLink: string;
    code: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale',
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
  public requestStatus({
    userId,
  }: {
    userId: string,
  }): CancelablePromise<{
    email: string;
    name: string;
    status: _36_Enums_SaleStatus;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/request-status',
      query: {
        'userId': userId,
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
  public updateRequest({
    requestBody,
  }: {
    requestBody: UpdateRequestStatusDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/sale/request-status',
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
  public getTrackingPerformance({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate,
    cursor,
    limit,
    search,
    status,
    sort,
  }: {
    startDate?: string,
    endDate?: string,
    cursor?: string,
    limit?: number,
    search?: string,
    status?: FilterStoreStatus,
    sort?: sortTrackingPerformance,
  }): CancelablePromise<({
    nextCursor?: any;
    preCursor: boolean;
    cursor: any;
    data: Array<any>;
  } | {
    cursor?: any;
    preCursor: boolean;
    nextCursor: string;
    data: Array<{
      status: _36_Enums_StoreStatus;
      createdAt: string;
      name: string;
      id: string;
      revenue: number;
    }>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/tracking-performance',
      query: {
        'startDate': startDate,
        'endDate': endDate,
        'cursor': cursor,
        'limit': limit,
        'search': search,
        'status': status,
        'sort': sort,
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
