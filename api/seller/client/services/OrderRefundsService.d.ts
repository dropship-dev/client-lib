import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { OrderRefund } from '../models/OrderRefund';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
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
    updateHistoryOrderRefund({ id, requestBody, fulfillmentAgencyId, storeId, }: {
        id: string;
        requestBody: UpdateOrderRefundDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        Order: (Order & {
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
        });
    }>;
}