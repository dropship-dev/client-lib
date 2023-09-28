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
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllOrders({ pageSize, fulfillmentAgencyId, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        pageSize?: number;
        /**
         * filter by fulfillment agency ID.
         */
        fulfillmentAgencyId?: number;
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
        })>;
    }>;
    /**
     * @returns ExportOrderResponseDto Ok
     * @throws ApiError
     */
    exportAllOrders({ fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
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
    updateFulfillmentStatus({ requestBody, fulfillmentAgencyId, }: {
        requestBody: UpdateFulFillmentStatusDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getOrder({ id, fulfillmentAgencyId, }: {
        id: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<(Order & {
        OrderItem: Array<(OrderItem & {
            ProductVariant: (ProductVariant & {
                Product: Product;
                PlatformVariant: PlatformVariant;
            });
        })>;
        Transaction: Array<Transaction>;
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
}
