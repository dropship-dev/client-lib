import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
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
            OrderItem: Array<OrderItem>;
            Transaction: Transaction;
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
        OrderItem: Array<OrderItem>;
        Transaction: Transaction;
    })>;
}
