import type { CreateNotificationDto } from '../models/CreateNotificationDto';
import type { Notification } from '../models/Notification';
import type { NotificationType } from '../models/NotificationType';
import type { UpdateNotificationDto } from '../models/UpdateNotificationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class NotificationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
        data: Array<Notification>;
    }>;
    /**
     * @returns Notification Ok
     * @throws ApiError
     */
    getNotification({ id, }: {
        id: number;
    }): CancelablePromise<Notification>;
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
}
