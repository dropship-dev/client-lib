import type { CreateNotificationDto } from '../models/CreateNotificationDto';
import type { Notification } from '../models/Notification';
import type { NotificationData } from '../models/NotificationData';
import type { NotificationType } from '../models/NotificationType';
import type { SubscribeTopicDto } from '../models/SubscribeTopicDto';
import type { UnsubscribeTopicDto } from '../models/UnsubscribeTopicDto';
import type { UpdateNotificationDto } from '../models/UpdateNotificationDto';
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
    unsubscribeTopic({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UnsubscribeTopicDto;
    }): CancelablePromise<string>;
    /**
     * @returns Notification Ok
     * @throws ApiError
     */
    createNotification({ requestBody, }: {
        requestBody: CreateNotificationDto;
    }): CancelablePromise<Notification>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllNotification({ fulfillmentAgencyId, storeId, type, pageSize, nextPageIndex, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
        type?: Array<NotificationType>;
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
     * @returns Notification Ok
     * @throws ApiError
     */
    updateNotification({ id, requestBody, }: {
        id: number;
        requestBody: UpdateNotificationDto;
    }): CancelablePromise<Notification>;
    /**
     * @returns Notification Ok
     * @throws ApiError
     */
    deleteNotification({ id, }: {
        id: number;
    }): CancelablePromise<Notification>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateReadNotification({ id, }: {
        id: number;
    }): CancelablePromise<string>;
}
