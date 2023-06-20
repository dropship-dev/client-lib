/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Transaction } from '../models/Transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Transaction Ok
   * @throws ApiError
   */
  public getTransaction({
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
