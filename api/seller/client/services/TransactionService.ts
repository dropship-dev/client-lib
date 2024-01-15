/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetRequestPayoutAggregateType_any_ } from '../models/GetRequestPayoutAggregateType_any_';
import type { Transaction } from '../models/Transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStoreTransaction({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<Transaction>;
    countStatusApprove: GetRequestPayoutAggregateType_any_;
    countStatusReject: GetRequestPayoutAggregateType_any_;
    countStatusRequesting: GetRequestPayoutAggregateType_any_;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
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
   * @returns Transaction Ok
   * @throws ApiError
   */
  public getStoreTransaction({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<Transaction> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction/{id}',
      path: {
        'storeId': storeId,
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
