import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { FilterStoreStatus } from '../models/FilterStoreStatus';
import type { GetRevenueStoreByFulfillmentResult } from '../models/GetRevenueStoreByFulfillmentResult';
import type { GetSummaryReferralResult } from '../models/GetSummaryReferralResult';
import type { GetTopRevenueStore } from '../models/GetTopRevenueStore';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ReferralService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns GetSummaryReferralResult Ok
     * @throws ApiError
     */
    getSummary({ startDate, endDate, search, }: {
        startDate?: string;
        endDate?: string;
        search?: string;
    }): CancelablePromise<GetSummaryReferralResult>;
    /**
     * @returns GetRevenueStoreByFulfillmentResult Ok
     * @throws ApiError
     */
    getRevenueStoreByFulfillment({ fulfillmentAgencyId, search, }: {
        fulfillmentAgencyId: number;
        search?: string;
    }): CancelablePromise<GetRevenueStoreByFulfillmentResult>;
    /**
     * @returns GetTopRevenueStore Ok
     * @throws ApiError
     */
    getTopRevenueStore({ startDate, endDate, search, topK, }: {
        startDate?: string;
        endDate?: string;
        search?: string;
        topK?: number;
    }): CancelablePromise<GetTopRevenueStore>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGmvPerFulfillmentAgency({ startDate, endDate, }: {
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        total: number;
        data: Array<{
            percentOfTotal: number;
            growth: number;
            gmv: number;
            name: string;
            id: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    detailGmvPerFulfillmentAgency({ fulfillmentId, search, cursor, limit, status, }: {
        fulfillmentId: number;
        search?: string;
        cursor?: string;
        limit?: number;
        status?: FilterStoreStatus;
    }): CancelablePromise<{
        total: number;
        preCursor: boolean;
        nextCursor: string;
        data: Array<{
            createdAt: string;
            onboarding?: boolean;
            status: _36_Enums_StoreStatus;
            name: string;
            id: string;
            revenue: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGmvByStore({ startDate, endDate, }: {
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        total: number;
        data: Array<{
            totalStore: number;
            percentOfTotal: number;
            growth: number;
            gmv: number;
            name: string;
        }>;
    }>;
}
