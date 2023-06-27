/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
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
  public getAllOrder({
    pageSize = 20,
    nextPageIndex,
    storeId,
    paymentStatus,
    fulfillmentStatus,
    email,
    productName,
    startDate,
    endDate,
    startTotal,
    endTotal,
  }: {
    pageSize?: number,
    nextPageIndex?: string,
    storeId?: number,
    paymentStatus?: TransactionStatus,
    fulfillmentStatus?: FulfillmentStatus,
    email?: string,
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: (string | number | GetResult_any_any_any_);
    total: number;
    data: Array<({
      OrderItem: Array<GetResult_any_any_any_>;
      Transaction: GetResult_any_any_any_;
    } & GetResult_any_any_any_)>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/order',
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'storeId': storeId,
        'paymentStatus': paymentStatus,
        'fulfillmentStatus': fulfillmentStatus,
        'email': email,
        'productName': productName,
        'startDate': startDate,
        'endDate': endDate,
        'startTotal': startTotal,
        'endTotal': endTotal,
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
  public getOrder({
    id,
  }: {
    id: string,
  }): CancelablePromise<({
    OrderItem: Array<GetResult_any_any_any_>;
    Transaction: GetResult_any_any_any_;
  } & GetResult_any_any_any_)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/order/{id}',
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStoreOrder({
    storeId,
    pageSize = 20,
    nextPageIndex,
    paymentStatus,
    fulfillmentStatus,
    email,
    productName,
    startDate,
    endDate,
    startTotal,
    endTotal,
  }: {
    storeId: number,
    pageSize?: number,
    nextPageIndex?: string,
    paymentStatus?: TransactionStatus,
    fulfillmentStatus?: FulfillmentStatus,
    email?: string,
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: (string | number | GetResult_any_any_any_);
    total: number;
    data: Array<({
      OrderItem: Array<GetResult_any_any_any_>;
      Transaction: GetResult_any_any_any_;
    } & GetResult_any_any_any_)>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/order',
      path: {
        'storeId': storeId,
      },
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'paymentStatus': paymentStatus,
        'fulfillmentStatus': fulfillmentStatus,
        'email': email,
        'productName': productName,
        'startDate': startDate,
        'endDate': endDate,
        'startTotal': startTotal,
        'endTotal': endTotal,
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
