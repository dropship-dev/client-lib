/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_SaleUserTrackingType } from '../models/_36_Enums_SaleUserTrackingType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SaleService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
