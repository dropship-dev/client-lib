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
    getGmvByStore({ startDate, endDate, }: {
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        total: number;
        data: Array<{
            percentOfTotal: number;
            growth: number;
            gmv: number;
            name: string;
        }>;
    }>;
}
