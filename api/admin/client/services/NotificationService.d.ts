import type { NotificationData } from '../models/NotificationData';
import type { NotificationType } from '../models/NotificationType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class NotificationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
     * @returns string Ok
     * @throws ApiError
     */
    updateReadNotification({ id, }: {
        id: number;
    }): CancelablePromise<string>;
}