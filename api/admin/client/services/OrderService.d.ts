import type { ExportOrderResponseDto } from '../models/ExportOrderResponseDto';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
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
        storeId?: string;
        paymentStatus?: TransactionStatus;
        fulfillmentStatus?: FulfillmentStatus;
        email?: string;
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
            OrderItem: Array<OrderItem>;
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
        fulfillmentStatus?: FulfillmentStatus;
        email?: string;
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
    }): CancelablePromise<Array<ExportOrderResponseDto>>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateFulfillmentStatus({ requestBody, }: {
        requestBody: UpdateFulFillmentStatusDto;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getOrder({ id, }: {
        id: string;
    }): CancelablePromise<(Order & {
        OrderItem: Array<OrderItem>;
        Transaction: Transaction;
        Store: Store;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreOrder({ storeId, pageSize, nextPageIndex, paymentStatus, fulfillmentStatus, email, productName, startDate, endDate, startTotal, endTotal, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: string;
        paymentStatus?: TransactionStatus;
        fulfillmentStatus?: FulfillmentStatus;
        email?: string;
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
                    PlatformVariant: any;
                });
            })>;
            Transaction: Transaction;
        })>;
    }>;
}
