import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { ProductPerformanceResult } from '../models/ProductPerformanceResult';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopStoreByRevenue } from '../models/TopStoreByRevenue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PerformanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRevenueOverTime({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<{
        revenues: Array<StoreRevenueOverTime>;
        period: Period;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCrOverTime({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<{
        CR: {
            growth: number;
            value: number;
        };
        purchased: number;
        checkedOut: number;
        addedToCart: number;
        viewedProduct: number;
    }>;
    /**
     * @returns ProductPerformanceResult Ok
     * @throws ApiError
     */
    getTopProductsByOrders({ startDate, endDate, storeId, limit, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
        limit?: number;
    }): CancelablePromise<Array<ProductPerformanceResult>>;
    /**
     * @returns TopStoreByRevenue Ok
     * @throws ApiError
     */
    getTopStoresByRevenue({ startDate, endDate, limit, }: {
        startDate?: string;
        endDate?: string;
        limit?: number;
    }): CancelablePromise<Array<TopStoreByRevenue>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPerformanceSummary({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<{
        AOV: {
            growth: number;
            value: number;
        };
        orders: {
            growth: number;
            value: number;
        };
        profit: {
            growth: number;
            value: number;
        };
        revenue: {
            growth: number;
            value: number;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductPerformance({ startDate, endDate, storeId, pageSize, nextPageIndex, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<ProductPerformance>;
    }>;
}
