import type { CaptureOrderDto } from '../models/CaptureOrderDto';
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { PaymentType } from '../models/PaymentType';
import type { UpdateOrderDto } from '../models/UpdateOrderDto';
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
        orderId: string;
        id: string;
        timeExpired: number;
        token: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateStoreOrder({ storeId, tokenClientInfo, requestBody, }: {
        storeId: string;
        tokenClientInfo: string;
        requestBody: UpdateOrderDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    previewStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        discountCrossSell: any;
        freeShipInfo: any;
        total: any;
        discountInfo: any;
        subTotal: any;
        shippingFee: any;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    captureStoreOrder({ storeId, orderId, paymentType, requestBody, bmClientInfo, }: {
        storeId: string;
        orderId: string;
        paymentType: PaymentType;
        requestBody: CaptureOrderDto;
        bmClientInfo?: string;
    }): CancelablePromise<{
        status: string;
    }>;
}
