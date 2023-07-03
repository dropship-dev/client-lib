/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { TransactionStatus } from '../models/TransactionStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStoreOrder({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: CreateOrderDto,
  }): CancelablePromise<{
    clientSecret: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order',
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
  public confirmStoreOrder({
    storeId,
    paypalOrderId,
    stripeOrderId,
  }: {
    storeId: number,
    paypalOrderId?: string,
    stripeOrderId?: string,
  }): CancelablePromise<{
    status: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/capture',
      path: {
        'storeId': storeId,
      },
      query: {
        'paypalOrderId': paypalOrderId,
        'stripeOrderId': stripeOrderId,
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
  public getStoreOrderByTracking({
    storeId,
    orderId,
    email,
  }: {
    storeId: number,
    orderId: string,
    email: string,
  }): CancelablePromise<({
    OrderItem: Array<GetResult_any_any_any_>;
    Transaction: {
      status: TransactionStatus;
    };
  } & GetResult_any_any_any_)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/order/{orderId}/tracking',
      path: {
        'storeId': storeId,
        'orderId': orderId,
      },
      query: {
        'email': email,
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
