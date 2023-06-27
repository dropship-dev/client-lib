import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Order } from '../models/Order';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Order Ok
     * @throws ApiError
     */
    createStoreOrder({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateOrderDto;
    }): CancelablePromise<Order>;
    /**
     * @returns Order Ok
     * @throws ApiError
     */
    confirmStoreOrder({ storeId, paypalOrderId, stripeOrderId, requestBody, }: {
        storeId: number;
        paypalOrderId: string;
        stripeOrderId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<Order>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreOrderByTracking({ storeId, orderId, email, }: {
        storeId: number;
        orderId: string;
        email: string;
    }): CancelablePromise<({
        OrderItem: Array<GetResult_any_any_any_>;
        Transaction: {
            status: TransactionStatus;
        };
    } & GetResult_any_any_any_)>;
}
