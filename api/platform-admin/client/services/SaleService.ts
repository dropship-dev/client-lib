/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { SaleInfoResponsive } from '../models/SaleInfoResponsive';
import type { UpdateRequestStatusDto } from '../models/UpdateRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SaleService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
  public searchSale({
    nextPageIndex,
    keyword,
    pageSize = 20,
  }: {
    nextPageIndex?: string,
    keyword?: string,
    pageSize?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      name: string;
      createdAt: string;
      id: string;
      SaleUser: {
        code: string;
      };
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sale/search',
      query: {
        'nextPageIndex': nextPageIndex,
        'keyword': keyword,
        'pageSize': pageSize,
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
   * @returns SaleInfoResponsive Ok
   * @throws ApiError
   */
  public getDetailSaleInfo({
    id,
  }: {
    id: number,
  }): CancelablePromise<SaleInfoResponsive> {
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
