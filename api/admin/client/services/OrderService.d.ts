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
import type { UpdateFulFillmentStatusDto } from '../models/UpdateFulFillmentStatusDto';
import type { UpdateFulFillmentStatusResp } from '../models/UpdateFulFillmentStatusResp';
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
    getAllOrders({ fulfillmentAgencyId, pageSize, nextPageIndex, storeId, paymentStatus, fulfillmentStatus, search, disputeStatus, productName, startDate, endDate, startTotal, endTotal, gateway, }: {
        /**
         * filter by fulfillment agency ID.
         */
        fulfillmentAgencyId: number;
        pageSize?: number;
        nextPageIndex?: string;
        /**
         * filter by store ID
         */
        storeId?: string;
        /**
         * filter by payment status
         */
        paymentStatus?: Array<TransactionStatus>;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: Array<FulfillmentStatus>;
        search?: string;
        disputeStatus?: Array<OrderDisputeStatus>;
        /**
         * filter by product name (product name contain)
         */
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
        gateway?: Array<number>;
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
    }>;
    /**
     * @returns ExportOrderResponseDto Ok
     * @throws ApiError
     */
    exportAllOrders({ fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        fulfillmentAgencyId: number;
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
     * @returns UpdateFulFillmentStatusResp Ok
     * @throws ApiError
     */
    updateFulfillmentStatus({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateFulFillmentStatusDto;
    }): CancelablePromise<UpdateFulFillmentStatusResp>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getOrder({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: string;
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
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    refundOrder({ orderId, requestBody, fulfillmentAgencyId, }: {
        orderId: string;
        requestBody: RefundOrderDto;
        fulfillmentAgencyId?: number;
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
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreOrder({ storeId, pageSize, nextPageIndex, paymentStatus, fulfillmentStatus, disputeStatus, search, email, productName, startDate, endDate, startTotal, endTotal, }: {
        /**
         * filter by store ID
         */
        storeId: string;
        pageSize?: number;
        nextPageIndex?: string;
        /**
         * filter by payment status
         */
        paymentStatus?: Array<TransactionStatus>;
        /**
         * filter by fulfillment status
         */
        fulfillmentStatus?: Array<FulfillmentStatus>;
        disputeStatus?: Array<OrderDisputeStatus>;
        search?: string;
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
    }>;
}
