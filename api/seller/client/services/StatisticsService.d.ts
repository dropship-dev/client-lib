import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StatisticsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsStoreAbandonmentCheckout({ storeId, startTime, endTime, }: {
        storeId: string;
        startTime: string;
        endTime: string;
    }): CancelablePromise<{
        orderCompletedPercent: number;
        orderCompleted: number;
        clickPercent: number;
        totalClick: number;
        openPercent: number;
        totalOpen: number;
        sentPercent: number;
        totalSent: number;
        revenueGrowthPercent: number;
        revenue: number;
        orderConvertedGrowthPercent: number;
        orderConverted: number;
        conversionRateGrowthPercent: number;
        conversionRate: number;
    }>;
}
