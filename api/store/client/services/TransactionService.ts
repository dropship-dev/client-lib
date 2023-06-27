/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfirmPaypalOrderDto } from '../models/ConfirmPaypalOrderDto';
import type { CreatePaypalOrderDto } from '../models/CreatePaypalOrderDto';
import type { CreateTransactionDto } from '../models/CreateTransactionDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createTransaction({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: CreateTransactionDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public createPaypalOrder({
    storeId,
    id,
    requestBody,
  }: {
    storeId: number,
    id: number,
    requestBody: CreatePaypalOrderDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public confirmPaypalOrder({
    storeId,
    id,
    requestBody,
  }: {
    storeId: number,
    id: number,
    requestBody: ConfirmPaypalOrderDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
