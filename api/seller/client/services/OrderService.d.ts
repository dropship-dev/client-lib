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
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreOrder({ storeId, pageSize, nextPageIndex, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        /**
         * filter by store ID
         */
        storeId: string;
        pageSize?: number;
        nextPageIndex?: string;
        /**
         * filter by payment status
         */
        paymentStatus?: TransactionStatus;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: FulfillmentStatus;
        /**
         * filter by customer email (email contain)
         */
        email?: string;
        /**
         * filter by product name (product name contain)
         */
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreOrder({ storeId, orderId, }: {
        storeId: string;
        orderId: string;
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
    })>;
}