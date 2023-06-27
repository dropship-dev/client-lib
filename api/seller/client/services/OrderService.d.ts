import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
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
        storeId: number;
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
        nextPageIndex: (string | number | GetResult_any_any_any_);
        total: number;
        data: Array<({
            OrderItem: Array<GetResult_any_any_any_>;
            Transaction: GetResult_any_any_any_;
        } & GetResult_any_any_any_)>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreOrder({ storeId, orderId, }: {
        storeId: number;
        orderId: string;
    }): CancelablePromise<({
        OrderItem: Array<GetResult_any_any_any_>;
        Transaction: GetResult_any_any_any_;
    } & GetResult_any_any_any_)>;
}
