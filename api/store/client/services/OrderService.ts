/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { PaymentType } from '../models/PaymentType';

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
    storeId: string,
    requestBody: CreateOrderDto,
  }): CancelablePromise<{
    clientSecret: string;
    orderId: string;
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
  public previewStoreOrder({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateOrderDto,
  }): CancelablePromise<{
    freeShipInfo: {
      value?: number;
      status?: boolean;
    };
    total: number;
    discountInfo: {
      value?: number;
      label?: string;
    };
    subTotal: number;
    shippingFee: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/preview',
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
  public captureStoreOrder({
    storeId,
    orderId,
    paymentType,
    requestBody,
    bmClientInfo,
  }: {
    storeId: string,
    orderId: string,
    paymentType: PaymentType,
    requestBody: CreateOrderDto,
    bmClientInfo?: string,
  }): CancelablePromise<{
    status: {
      notIn: Array<string>;
    };
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/{orderId}/capture',
      path: {
        'storeId': storeId,
        'orderId': orderId,
      },
      headers: {
        'BM-Client-Info': bmClientInfo,
      },
      query: {
        'paymentType': paymentType,
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
