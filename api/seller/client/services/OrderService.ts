/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { PaymentType } from '../models/PaymentType';
import type { ProductVariant } from '../models/ProductVariant';
import type { Store } from '../models/Store';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { VariantCombo } from '../models/VariantCombo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

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
    /**
     * filter by store ID
     */
    storeId: string,
    pageSize?: number,
    nextPageIndex?: string,
    /**
     * filter by payment status
     */
    paymentStatus?: TransactionStatus,
    /**
     * filter by fulfillment status
     */
    fulfillmentStatus?: FulfillmentStatus,
    /**
     * filter by customer email (email contain)
     */
    email?: string,
    /**
     * filter by product name (product name contain)
     */
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<(Order & {
      OrderItem: Array<(OrderItem & {
        VariantCombo: (VariantCombo & {
          Product: {
            Campaign: Campaign;
          };
        });
        ProductVariant: (ProductVariant & {
          Product: {
            name: string;
            Campaign: Campaign;
          };
          PlatformVariant: {
            price: number;
            name: string;
            id: number;
          };
        });
      })>;
      Transaction: Array<Transaction>;
      Store: Store;
    })>;
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStoreOrder({
    storeId,
    orderId,
  }: {
    storeId: string,
    orderId: string,
  }): CancelablePromise<(Order & {
    OrderItem: Array<(OrderItem & {
      VariantCombo: VariantCombo;
      ProductVariant: {
        photo: string;
        name: string;
        Product: {
          name: string;
        };
      };
    })>;
    Transaction: Array<Transaction>;
    Payment: {
      type: PaymentType;
    };
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/order/{orderId}',
      path: {
        'storeId': storeId,
        'orderId': orderId,
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