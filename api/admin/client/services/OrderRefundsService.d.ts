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
export declare class OrderRefundsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateHistoryOrderRefund({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: string;
        requestBody: UpdateOrderRefundDto;
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
    }>;
}
