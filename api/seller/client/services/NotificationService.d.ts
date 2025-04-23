import type { _36_Enums_NotificationType } from '../models/_36_Enums_NotificationType';
import type { NotificationData } from '../models/NotificationData';
import type { SubscribeTopicDto } from '../models/SubscribeTopicDto';
import type { UnsubscribeTopicDto } from '../models/UnsubscribeTopicDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class NotificationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    subscribeTopic({ requestBody, }: {
        requestBody: SubscribeTopicDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    unsubscribeTopic({ requestBody, }: {
        requestBody: UnsubscribeTopicDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllNotification({ fulfillmentAgencyId, storeId, type, pageSize, nextPageIndex, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
        type?: Array<_36_Enums_NotificationType>;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<NotificationData>;
    }>;
    /**
     * @returns NotificationData Ok
     * @throws ApiError
     */
    getNotification({ id, }: {
        id: number;
    }): CancelablePromise<NotificationData>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateReadNotification({ id, }: {
        id: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    markAllReadNotifications({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
}
