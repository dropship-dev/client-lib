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
        clickPercent: number;
        totalClick: number;
        totalOpenPercent: number;
        totalOpen: number;
        revenue: number;
        conversionRate: number;
        orderRecoveredPercent: number;
        orderRecovered: number;
        emailSent: number;
    }>;
}
