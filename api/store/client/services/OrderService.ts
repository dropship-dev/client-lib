/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { TransactionStatus } from '../models/TransactionStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Order Ok
   * @throws ApiError
   */
  public createStoreOrder({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: CreateOrderDto,
  }): CancelablePromise<Order> {
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
  public getStoreOrderByTracking({
    storeId,
    orderId,
    email,
  }: {
    storeId: number,
    orderId: string,
    email: string,
  }): CancelablePromise<(Order & {
    OrderItem: Array<OrderItem>;
    Transaction: {
      status: TransactionStatus;
    };
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/order/tracking',
      path: {
        'storeId': storeId,
      },
      query: {
        'orderId': orderId,
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
