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
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllOrders({ pageSize, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        pageSize?: number;
        nextPageIndex?: string;
        /**
         * filter by store ID
         */
        storeId?: string;
        /**
         * filter by payment status
         */
        paymentStatus?: TransactionStatus;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: FulfillmentStatus;
        /**
         * filter by store email (email contain)
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
                ProductVariant: (ProductVariant & {
                    Product: Product;
                    PlatformVariant: PlatformVariant;
                });
            })>;
            Transaction: Transaction;
            Store: Store;
        })>;
    }>;
    /**
     * @returns ExportOrderResponseDto Ok
     * @throws ApiError
     */
    exportAllOrders({ paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        paymentStatus?: TransactionStatus;
        fulfillmentStatus?: Array<FulfillmentStatus>;
        email?: string;
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
    }): CancelablePromise<Array<ExportOrderResponseDto>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateFulfillmentStatus({ requestBody, }: {
        requestBody: UpdateFulFillmentStatusDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getOrder({ id, }: {
        id: string;
    }): CancelablePromise<(Order & {
        OrderItem: Array<(OrderItem & {
            ProductVariant: (ProductVariant & {
                Product: Product;
                PlatformVariant: PlatformVariant;
            });
        })>;
        Transaction: Transaction;
        Store: Store;
    })>;
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
                ProductVariant: (ProductVariant & {
                    PlatformVariant: {
                        price: number;
                        name: string;
                        id: number;
                    };
                });
            })>;
            Transaction: Transaction;
        })>;
    }>;
}
