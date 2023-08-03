import type { StoreRevenue } from '../models/StoreRevenue';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { TopProductByRevenue } from '../models/TopProductByRevenue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PerformanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns StoreRevenue Ok
     * @throws ApiError
     */
    getRevenueOverTime({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<Array<StoreRevenue>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCrOverTime({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<{
        purchase: number;
        checkout: number;
        addToCart: number;
        viewProduct: number;
    }>;
    /**
     * @returns TopProductByOrder Ok
     * @throws ApiError
     */
    getTopProductsByOrders({ startDate, endDate, storeId, limit, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
        limit?: number;
    }): CancelablePromise<Array<TopProductByOrder>>;
    /**
     * @returns TopProductByRevenue Ok
     * @throws ApiError
     */
    getTopStoresByRevenue({ startDate, endDate, limit, }: {
        startDate?: string;
        endDate?: string;
        limit?: number;
    }): CancelablePromise<Array<TopProductByRevenue>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPerformanceSummary({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<{
        totalOrders: number;
        totalProfit: number;
        totalRevenue: number;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    getProductPerformance({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<void>;
}
