import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { FilterStoreStatus } from '../models/FilterStoreStatus';
import type { sortTrackingPerformance } from '../models/sortTrackingPerformance';
import type { UpdateRequestStatusDto } from '../models/UpdateRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SaleService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSaleInfo(): CancelablePromise<{
        name: string;
        referralLink: string;
        code: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    requestStatus({ userId, }: {
        userId: string;
    }): CancelablePromise<{
        email: string;
        name: string;
        status: _36_Enums_SaleStatus;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateRequest({ requestBody, }: {
        requestBody: UpdateRequestStatusDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTrackingPerformance({ startDate, endDate, cursor, limit, search, status, sort, }: {
        startDate?: string;
        endDate?: string;
        cursor?: string;
        limit?: number;
        search?: string;
        status?: FilterStoreStatus;
        sort?: sortTrackingPerformance;
    }): CancelablePromise<({
        nextCursor?: any;
        preCursor: boolean;
        cursor: any;
        data: Array<any>;
    } | {
        cursor?: any;
        preCursor: boolean;
        nextCursor: string;
        data: Array<{
            status: _36_Enums_StoreStatus;
            createdAt: string;
            name: string;
            id: string;
            revenue: number;
        }>;
    })>;
}
