/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { ExportOrderResponseDto } from '../models/ExportOrderResponseDto';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { Store } from '../models/Store';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { UpdateFulFillmentStatusDto } from '../models/UpdateFulFillmentStatusDto';
import type { VariantCombo } from '../models/VariantCombo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllOrders({
    pageSize = 20,
    fulfillmentAgencyId = 1,
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
    /**
     * filter by fulfillment agency ID.
     */
    fulfillmentAgencyId?: number,
    nextPageIndex?: string,
    /**
     * filter by store ID
     */
    storeId?: string,
    /**
     * filter by payment status
     */
    paymentStatus?: TransactionStatus,
    /**
     * filter by fulfillment status
     */
    fulfillmentStatus?: FulfillmentStatus,
    /**
     * filter by store email (email contain)
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
          Product: Product;
        });
        ProductVariant: (ProductVariant & {
          Product: Product;
          PlatformVariant: PlatformVariant;
        });
      })>;
      Transaction: Transaction;
      Store: Store;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/order',
      query: {
        'pageSize': pageSize,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns ExportOrderResponseDto Ok
   * @throws ApiError
   */
  public exportAllOrders({
    fulfillmentAgencyId = 1,
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
    fulfillmentAgencyId?: number,
    storeId?: string,
    paymentStatus?: TransactionStatus,
    fulfillmentStatus?: Array<FulfillmentStatus>,
    email?: string,
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
  }): CancelablePromise<Array<ExportOrderResponseDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/order/export',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public updateFulfillmentStatus({
    requestBody,
    fulfillmentAgencyId = 1,
  }: {
    requestBody: UpdateFulFillmentStatusDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/order/fulfillmentStatus',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getOrder({
    id,
    fulfillmentAgencyId = 1,
  }: {
    id: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<(Order & {
    OrderItem: Array<(OrderItem & {
      ProductVariant: (ProductVariant & {
        Product: Product;
        PlatformVariant: PlatformVariant;
      });
    })>;
    Transaction: Transaction;
    Store: Store;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/order/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
      Transaction: Transaction;
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

}