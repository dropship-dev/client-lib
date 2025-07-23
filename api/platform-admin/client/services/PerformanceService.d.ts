import type { AgencyStatisticResp } from '../models/AgencyStatisticResp';
import type { LocationResult } from '../models/LocationResult';
import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { StoreProductPerformanceResp } from '../models/StoreProductPerformanceResp';
import type { StoreProductProfit } from '../models/StoreProductProfit';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { TopStoreByRevenue } from '../models/TopStoreByRevenue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PerformanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns LocationResult Ok
     * @throws ApiError
     */
    getProductByLocation({ fulfillmentAgencyId, startDate, endDate, storeId, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<Array<LocationResult>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRevenueOverTime({ fulfillmentAgencyId, startDate, endDate, storeId, referralCode, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
        referralCode?: string;
    }): CancelablePromise<{
        revenues: Array<StoreRevenueOverTime>;
        period: Period;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCrOverTime({ fulfillmentAgencyId, startDate, endDate, storeId, }: {
        fulfillmentAgencyId?: number;
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
     * @returns any Ok
     * @throws ApiError
     */
    getCrOverTimeV2({ fulfillmentAgencyId, startDate, endDate, storeId, }: {
        fulfillmentAgencyId?: number;
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
     * @returns TopProductByOrder Ok
     * @throws ApiError
     */
    getTopProductsByOrders({ fulfillmentAgencyId, startDate, endDate, storeId, limit, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
        limit?: number;
    }): CancelablePromise<Array<TopProductByOrder>>;
    /**
     * @returns TopStoreByRevenue Ok
     * @throws ApiError
     */
    getTopStoresByRevenue({ fulfillmentAgencyId, startDate, endDate, limit, }: {
        fulfillmentAgencyId: number;
        startDate?: string;
        endDate?: string;
        limit?: number;
    }): CancelablePromise<Array<TopStoreByRevenue>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPerformanceSummary({ fulfillmentAgencyId, startDate, endDate, storeId, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<({
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
    } | {
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
        revenueWithTax: {
            growth: number;
            value: number;
        };
        revenue: {
            growth: number;
            value: number;
        };
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductPerformance({ fulfillmentAgencyId, startDate, endDate, storeId, pageSize, nextPageIndex, }: {
        fulfillmentAgencyId?: number;
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
    /**
     * @returns StoreProductProfit Ok
     * @throws ApiError
     */
    getStoreProductProfit({ fulfillmentAgencyId, startDate, endDate, storeId, search, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
        search?: string;
    }): CancelablePromise<StoreProductProfit>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreProductPerformance({ fulfillmentAgencyId, startDate, endDate, storeId, search, pageSize, nextPageIndex, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
        search?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<StoreProductPerformanceResp>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentAgencyPerformanceSummary({ fulfillmentAgencyId, startDate, endDate, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
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
    getFulfillmentAgencyRevenueOverTime({ fulfillmentAgencyId, startDate, endDate, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        revenues: Array<StoreRevenueOverTime>;
        period: Period;
    }>;
    /**
     * @returns AgencyStatisticResp Ok
     * @throws ApiError
     */
    getFulfillmentAgencyStatistic({ fulfillmentAgencyId, startDate, endDate, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<AgencyStatisticResp>;
}
