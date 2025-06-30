/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_SaleUserTrackingType } from '../models/_36_Enums_SaleUserTrackingType';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { CheckRejectStatusDto } from '../models/CheckRejectStatusDto';
import type { CheckVerifyEmailDto } from '../models/CheckVerifyEmailDto';
import type { ResponsePaginateCursor_StoreTrackingPerformance_ } from '../models/ResponsePaginateCursor_StoreTrackingPerformance_';
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
    status?: Array<_36_Enums_StoreStatus>,
    sort?: sortTrackingPerformance,
  }): CancelablePromise<(ResponsePaginateCursor_StoreTrackingPerformance_ & {
    total: number;
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getListSellerInvitedBySale({
    nextPageIndex,
    pageSize = 20,
    keyword,
    startDate,
    endDate,
  }: {
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
    startDate?: string,
    endDate?: string,
  }): CancelablePromise<Array<{
    totalStore: number;
    stores: Array<{
      gmv: number;
      name: string;
      storeId: string;
    }>;
    createdAt: string;
    phone: string;
    name: string;
    email: string;
    id: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/seller-invited',
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
  /**
   * @returns boolean Ok
   * @throws ApiError
   */
  public checkVerifyEmailSale({
    requestBody,
  }: {
    requestBody: CheckVerifyEmailDto,
  }): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/sale/verify-email',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
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
  public checkRejectStatus({
    requestBody,
  }: {
    requestBody: CheckRejectStatusDto,
  }): CancelablePromise<{
    rejectedAt: string;
    status: boolean;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/sale/reject-status',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
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
  public getAccountRequest({
    nextPageIndex,
    pageSize = 20,
    keyword,
  }: {
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      email: string;
      name: string;
      createdAt: string;
      id: string;
      SaleUser: {
        status: _36_Enums_SaleStatus;
        id: number;
      };
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/account-request',
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'keyword': keyword,
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
   * @returns void
   * @throws ApiError
   */
  public get1X1PixelImage({
    data,
    token,
  }: {
    data: string,
    token: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/tracking-images',
      query: {
        'data': data,
        'token': token,
      },
      errors: {
        400: `Bad request`,
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
  public getDetailSaleInfo({
    id,
  }: {
    id: number,
  }): CancelablePromise<{
    referralInfo: {
      gmvPerSale: number;
      gmv: number;
      totalOrder: number;
      totalStore: number;
    };
    sale: {
      code: string;
      id: number;
      SaleUserTracking: Array<{
        actionById: string;
        saleId: number;
        type: _36_Enums_SaleUserTrackingType;
        updatedAt: string;
        createdAt: string;
        id: number;
      }>;
      User: {
        email: string;
        name: string;
        id: string;
      };
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/{id}',
      path: {
        'id': id,
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
