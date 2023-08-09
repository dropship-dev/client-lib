import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { Order } from '../models/Order';
import type { OrderItem } from '../models/OrderItem';
import type { PaymentType } from '../models/PaymentType';
import type { ProductVariant } from '../models/ProductVariant';
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
    createStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        clientSecret: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    previewStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        total: number;
        subTotal: number;
        shippingFee: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    captureStoreOrder({ storeId, orderId, paymentType, requestBody, }: {
        storeId: string;
        orderId: string;
        paymentType: PaymentType;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        status: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreOrderByTracking({ storeId, orderId, email, }: {
        storeId: string;
        orderId: string;
        email: string;
    }): CancelablePromise<(Order & {
        OrderItem: Array<(OrderItem & {
            ProductVariant: (ProductVariant & {
                PlatformVariant: {
                    price: number;
                    name: string;
                    id: number;
                };
            });
        })>;
        Transaction: {
            status: TransactionStatus;
        };
    })>;
}
