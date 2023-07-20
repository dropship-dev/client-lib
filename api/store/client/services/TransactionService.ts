/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfirmPaypalOrderDto } from '../models/ConfirmPaypalOrderDto';
import type { CreatePaypalOrderDto } from '../models/CreatePaypalOrderDto';
import type { CreateTransactionDto } from '../models/CreateTransactionDto';
import type { Transaction } from '../models/Transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Transaction Ok
   * @throws ApiError
   */
  public createStoreTransaction({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateTransactionDto,
  }): CancelablePromise<Transaction> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/transaction',
      path: {
        'storeId': storeId,
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
   * @returns Transaction Ok
   * @throws ApiError
   */
  public createPaypalOrder({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: CreatePaypalOrderDto,
  }): CancelablePromise<Transaction> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/transaction/{id}/order/paypal',
      path: {
        'storeId': storeId,
        'id': id,
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
   * @returns Transaction Ok
   * @throws ApiError
   */
  public confirmPaypalOrder({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: ConfirmPaypalOrderDto,
  }): CancelablePromise<Transaction> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/transaction/{id}/order/paypal/confirm',
      path: {
        'storeId': storeId,
        'id': id,
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

}
