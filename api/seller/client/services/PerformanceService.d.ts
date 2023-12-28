import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { StoreProductPerformanceResp } from '../models/StoreProductPerformanceResp';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PerformanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRevenueOverTime({ fulfillmentAgencyId, startDate, endDate, storeId, }: {
        fulfillmentAgencyId?: number;
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
     * @returns any Ok
     * @throws ApiError
     */
    getPerformanceSummary({ fulfillmentAgencyId, startDate, endDate, storeId, }: {
        fulfillmentAgencyId?: number;
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
    getProductPerformance({ fulfillmentAgencyId, startDate, endDate, storeId, productName, orderBy, order, pageSize, nextPageIndex, }: {
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
        productName?: string;
        orderBy?: 'revenue' | 'name';
        order?: 'ASC' | 'DESC';
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
}
