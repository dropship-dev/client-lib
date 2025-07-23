import type { GetCustomerTrackingResultDto } from '../models/GetCustomerTrackingResultDto';
import type { GetPaginateTopLandingPageResultDto } from '../models/GetPaginateTopLandingPageResultDto';
import type { GetTrackingRetentionRateResultDto } from '../models/GetTrackingRetentionRateResultDto';
import type { LiveCoordinates } from '../models/LiveCoordinates';
import type { LocationResult } from '../models/LocationResult';
import type { Period } from '../models/Period';
import type { ProductPerformance } from '../models/ProductPerformance';
import type { ResponseTrackingPie } from '../models/ResponseTrackingPie';
import type { StoreProductPerformanceResp } from '../models/StoreProductPerformanceResp';
import type { StoreProductProfit } from '../models/StoreProductProfit';
import type { StoreRevenueOverTime } from '../models/StoreRevenueOverTime';
import type { TopProductByOrder } from '../models/TopProductByOrder';
import type { UTMSourceSchema } from '../models/UTMSourceSchema';
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
    getLiveVisitor({ storeId, fulfillmentAgencyId, startDate, endDate, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        coordinates: LiveCoordinates;
        viewer: number;
    }>;
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
     * @returns ResponseTrackingPie Ok
     * @throws ApiError
     */
    getTopCountry({ storeId, startDate, endDate, select, }: {
        storeId: string;
        startDate?: string;
        endDate?: string;
        select?: number;
    }): CancelablePromise<ResponseTrackingPie>;
    /**
     * @returns ResponseTrackingPie Ok
     * @throws ApiError
     */
    statsDevice({ storeId, startDate, endDate, }: {
        storeId: string;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<ResponseTrackingPie>;
    /**
     * @returns ResponseTrackingPie Ok
     * @throws ApiError
     */
    statsReferrer({ storeId, startDate, endDate, }: {
        storeId: string;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<ResponseTrackingPie>;
    /**
     * @returns GetCustomerTrackingResultDto Ok
     * @throws ApiError
     */
    getCustomerTracking({ storeId, startDate, endDate, filterBy, }: {
        storeId: string;
        startDate?: string;
        endDate?: string;
        filterBy?: 'ORDER' | 'REVENUE';
    }): CancelablePromise<GetCustomerTrackingResultDto>;
    /**
     * @returns GetTrackingRetentionRateResultDto Ok
     * @throws ApiError
     */
    getTrackingRetentionRate({ storeId, startDate, endDate, }: {
        storeId: string;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<GetTrackingRetentionRateResultDto>;
    /**
     * @returns GetPaginateTopLandingPageResultDto Ok
     * @throws ApiError
     */
    getTopLandingPage({ storeId, startDate, endDate, limit, cursor, }: {
        storeId: string;
        startDate?: string;
        endDate?: string;
        limit?: number;
        cursor?: string;
    }): CancelablePromise<GetPaginateTopLandingPageResultDto>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTrafficSource({ storeId, source, startDate, endDate, cursor, limit, }: {
        storeId: string;
        source: UTMSourceSchema;
        startDate?: string;
        endDate?: string;
        cursor?: string;
        limit?: number;
    }): CancelablePromise<{
        preCursor: boolean;
        nextCursor: string;
        data: Array<{
            CR: number;
            viewed: number;
            purchased: number;
            subTotal: number;
            AOI: number;
            AOV: number;
            checkedOut: number;
            addedToCart: number;
            name: string;
        }>;
    }>;
}
