/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccount } from '../models/BankAccount';
import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { RequestPayout } from '../models/RequestPayout';
import type { RequestPayoutStatus } from '../models/RequestPayoutStatus';
import type { Store } from '../models/Store';
import type { UpdateRequestPayoutDto } from '../models/UpdateRequestPayoutDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RequestPayoutService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns RequestPayout Ok
   * @throws ApiError
   */
  public createRequestPayout({
    requestBody,
  }: {
    requestBody: CreateRequestPayoutDto,
  }): CancelablePromise<RequestPayout> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-payout',
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
  public getAllRequestPayout({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    statusRequest,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    statusRequest?: Array<RequestPayoutStatus>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<(RequestPayout & {
      BankAccount: BankAccount;
      Store: Store;
    })>;
    countStatusRequestPayout: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'statusRequest': statusRequest,
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
  public countRequestPayout({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    statusRequest,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    statusRequest?: Array<RequestPayoutStatus>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    countStatusRequestPayout: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/count-request-payout',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'statusRequest': statusRequest,
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
  public getRequestPayout({
    storeId,
    id,
  }: {
    storeId: string,
    id: string,
  }): CancelablePromise<(RequestPayout & {
    BankAccount: BankAccount;
    Store: Store;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/{id}',
      path: {
        'id': id,
      },
      query: {
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
   * @returns RequestPayout Ok
   * @throws ApiError
   */
  public updateRequestPayout({
    id,
    fulfillmentAgencyId,
    requestBody,
  }: {
    id: string,
    fulfillmentAgencyId: number,
    requestBody: UpdateRequestPayoutDto,
  }): CancelablePromise<RequestPayout> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/request-payout/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
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
  public toolSyncBalanceAmountForSeller({
    fulfillmentAgencyId,
    expiredHoldSetting,
    expiredPayOutInSetting,
  }: {
    fulfillmentAgencyId: number,
    expiredHoldSetting: string,
    expiredPayOutInSetting: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/request-payout/tool-sync-balance-amount-for-seller',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'expiredHoldSetting': expiredHoldSetting,
        'expiredPayOutInSetting': expiredPayOutInSetting,
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
