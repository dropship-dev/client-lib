import type { CreateOrderTrackingDto } from '../models/CreateOrderTrackingDto';
import type { NullableDateTimeFieldUpdateOperationsInput } from '../models/NullableDateTimeFieldUpdateOperationsInput';
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
        token: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateOrderTracking({ trackingId, requestBody, }: {
        trackingId: number;
        requestBody: UpdateOrderTrackingDto;
    }): CancelablePromise<{
        expiredAt: (string | NullableDateTimeFieldUpdateOperationsInput);
        token: string;
        id: number;
    }>;
}
