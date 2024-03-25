/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { ExportOrderResponseDto } from '../models/ExportOrderResponseDto';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderDisputeStatus } from '../models/OrderDisputeStatus';
import type { OrderItem } from '../models/OrderItem';
import type { OrderRefund } from '../models/OrderRefund';
import type { Payment } from '../models/Payment';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { RefundOrderDto } from '../models/RefundOrderDto';
import type { Store } from '../models/Store';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { UpdateFulFillmentStatusResp } from '../models/UpdateFulFillmentStatusResp';
import type { UpdateOrderStatusDto } from '../models/UpdateOrderStatusDto';
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
    fulfillmentAgencyId,
    pageSize = 20,
    nextPageIndex,
    storeId,
    paymentStatus,
    fulfillmentStatus,
    search,
    disputeStatus,
    productName,
    startDate,
    endDate,
    startTotal,
    endTotal,
    gateway,
  }: {
    /**
     * filter by fulfillment agency ID.
     */
    fulfillmentAgencyId: number,
    pageSize?: number,
    nextPageIndex?: string,
    /**
     * filter by store ID
     */
    storeId?: string,
    /**
     * filter by payment status
     */
    paymentStatus?: Array<TransactionStatus>,
    /**
     * filter by fulfillment status
     */
    fulfillmentStatus?: Array<FulfillmentStatus>,
    search?: string,
    disputeStatus?: Array<OrderDisputeStatus>,
    /**
     * filter by product name (product name contain)
     */
    productName?: string,
    startDate?: string,
    endDate?: string,
    startTotal?: number,
    endTotal?: number,
    gateway?: Array<number>,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<(Order & {
      OrderRefund: Array<OrderRefund>;
      OrderItem: Array<(OrderItem & {
        VariantCombo: (VariantCombo & {
          Product: Product;
        });
        ProductVariant: (ProductVariant & {
          Product: Product;
          PlatformVariant: PlatformVariant;
        });
      })>;
      Transaction: Array<Transaction>;
      Payment: Payment;
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
        'search': search,
        'disputeStatus': disputeStatus,
        'productName': productName,
        'startDate': startDate,
        'endDate': endDate,
        'startTotal': startTotal,
        'endTotal': endTotal,
        'gateway': gateway,
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
    fulfillmentAgencyId,
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
    fulfillmentAgencyId: number,
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
   * @returns UpdateFulFillmentStatusResp Ok
   * @throws ApiError
   */
  public updateFulfillmentStatus({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: UpdateOrderStatusDto,
  }): CancelablePromise<UpdateFulFillmentStatusResp> {
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
    fulfillmentAgencyId,
    id,
  }: {
    fulfillmentAgencyId: number,
    id: string,
  }): CancelablePromise<(Order & {
    OrderRefund: Array<OrderRefund>;
    OrderItem: Array<(OrderItem & {
      VariantCombo: (VariantCombo & {
        Product: Product;
      });
      ProductVariant: (ProductVariant & {
        Product: Product;
        PlatformVariant: PlatformVariant;
      });
    })>;
    Transaction: Array<Transaction>;
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
  public refundOrder({
    orderId,
    requestBody,
    fulfillmentAgencyId = 1,
  }: {
    orderId: string,
    requestBody: RefundOrderDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<(Order & {
    OrderRefund: Array<OrderRefund>;
    OrderItem: Array<(OrderItem & {
      VariantCombo: (VariantCombo & {
        Product: Product;
      });
      ProductVariant: (ProductVariant & {
        Product: Product;
        PlatformVariant: PlatformVariant;
      });
    })>;
    Transaction: Array<Transaction>;
    Store: Store;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/order/{orderId}/refund-order',
      path: {
        'orderId': orderId,
      },
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
  public getAllStoreOrder({
    storeId,
    pageSize = 20,
    nextPageIndex,
    paymentStatus,
    fulfillmentStatus,
    disputeStatus,
    search,
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
    paymentStatus?: Array<TransactionStatus>,
    /**
     * filter by fulfillment status
     */
    fulfillmentStatus?: Array<FulfillmentStatus>,
    disputeStatus?: Array<OrderDisputeStatus>,
    search?: string,
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
      OrderRefund: Array<OrderRefund>;
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
        'disputeStatus': disputeStatus,
        'search': search,
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
