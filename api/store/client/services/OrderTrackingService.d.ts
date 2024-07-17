import type { CreateOrderTrackingDto } from '../models/CreateOrderTrackingDto';
import type { UpdateOrderTrackingDto } from '../models/UpdateOrderTrackingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderTrackingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createOrderTracking({ requestBody, }: {
        requestBody: CreateOrderTrackingDto;
    }): CancelablePromise<{
        createdAt: string;
        id: number;
        expiredAt: string;
        token: string;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateOrderTracking({ trackingId, requestBody, }: {
        trackingId: number;
        requestBody: UpdateOrderTrackingDto;
    }): CancelablePromise<void>;
}
