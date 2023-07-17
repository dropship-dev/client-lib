/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: number,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<Transaction>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction',
      path: {
        'storeId': storeId,
      },
      query: {
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
    storeId: number,
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
