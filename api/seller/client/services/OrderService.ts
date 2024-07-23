/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { FraudDetection } from '../models/FraudDetection';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderDisputeStatus } from '../models/OrderDisputeStatus';
import type { OrderItem } from '../models/OrderItem';
import type { OrderRefund } from '../models/OrderRefund';
import type { PaymentType } from '../models/PaymentType';
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
    gateway,
    fraudStatus,
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
    gateway?: Array<number>,
    fraudStatus?: Array<FraudStatusType>,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<(Order & {
      OrderRefund: Array<OrderRefund>;
      OrderItem: Array<(OrderItem & {
        VariantCombo: (VariantCombo & {
          Product: (Product & {
            Campaign: Campaign;
          });
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
      Payment: {
        email: string;
        name: string;
        type: PaymentType;
      };
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
        'gateway': gateway,
        'fraudStatus': fraudStatus,
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
    FraudDetection: Array<FraudDetection>;
    OrderRefund: Array<OrderRefund>;
    OrderItem: Array<(OrderItem & {
      VariantCombo: VariantCombo;
      ProductVariant: (ProductVariant & {
        Product: {
          name: string;
        };
      });
    })>;
    Transaction: Array<Transaction>;
    Payment: {
      type: PaymentType;
    };
    Store: Store;
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

  /**
   * @returns UpdateFulFillmentStatusResp Ok
   * @throws ApiError
   */
  public updateOrderOfStoreStatus({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateOrderStatusDto,
  }): CancelablePromise<UpdateFulFillmentStatusResp> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/order/orderStatus',
      query: {
        'StoreId': storeId,
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
  public refundOrderForSeller({
    storeId,
    orderId,
    requestBody,
  }: {
    storeId: string,
    orderId: string,
    requestBody: RefundOrderDto,
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
      url: '/store/{storeId}/order/{orderId}/refund-order',
      path: {
        'orderId': orderId,
      },
      query: {
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

}
