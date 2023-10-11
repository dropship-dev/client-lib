/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { OrderRefund } from '../models/OrderRefund';
import type { ProductVariant } from '../models/ProductVariant';
import type { Store } from '../models/Store';
import type { Transaction } from '../models/Transaction';
import type { UpdateOrderRefundDto } from '../models/UpdateOrderRefundDto';
import type { VariantCombo } from '../models/VariantCombo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderRefundsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateHistoryOrderRefund({
    fulfillmentAgencyId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    id: string,
    requestBody: UpdateOrderRefundDto,
  }): CancelablePromise<{
    Order: (Order & {
      OrderRefund: Array<OrderRefund>;
      OrderItem: Array<(OrderItem & {
        VariantCombo: VariantCombo;
        ProductVariant: ProductVariant;
      })>;
      Transaction: Array<Transaction>;
      Store: Store;
    });
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/order-refunds/{id}',
      path: {
        'id': id,
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

}
