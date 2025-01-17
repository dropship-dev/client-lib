import type { StatisticsDisplayType } from '../models/StatisticsDisplayType';
import type { StatisticsOverviewAbandonedCheckout } from '../models/StatisticsOverviewAbandonedCheckout';
import type { StatisticsOverviewConversionValue } from '../models/StatisticsOverviewConversionValue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StatisticsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsBusinessPerformancesSummary({ startTime, endTime, }: {
        startTime?: string;
        endTime?: string;
    }): CancelablePromise<{
        perRecipientGrowthPercent: number;
        perRecipient: number;
        automationPercent: number;
        automationGrowthPercent: number;
        automation: number;
        recipientGrowthPercent: number;
        recipient: number;
        attributeRevenuePercent: number;
        attributeGrowthPercent: number;
        attributeRevenue: number;
        revenueGrowthPercent: number;
        revenue: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsOverview({ startTime, endTime, timezone, }: {
        startTime?: string;
        endTime?: string;
        timezone?: string;
    }): CancelablePromise<{
        totalRecipientsGrowthPercent: number;
        totalRecipients: number;
        conversionValueGrowthPercent: number;
        conversionValue: number;
        displayType: StatisticsDisplayType;
        totalRecipientsStatistics: Array<StatisticsOverviewAbandonedCheckout>;
        conversionValueStatistics: Array<StatisticsOverviewConversionValue>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsAutomationMetrics({ startTime, endTime, }: {
        startTime?: string;
        endTime?: string;
    }): CancelablePromise<{
        revenuePerRecipientGrowthPercent: number;
        revenuePerRecipient: number;
        conversionValueGrowthPercent: number;
        conversionValue: number;
        conversionRateGrowthPercent: number;
        conversionRate: number;
        bounceRateGrowthPercent: number;
        bounceRate: number;
        clickThroughRateGrowthPercent: number;
        clickThroughRate: number;
        spamRateGrowthPercent: number;
        spamRate: number;
        unsubscribeRateGrowthPercent: number;
        unsubscribeRate: number;
        openRateGrowthPercent: number;
        openRate: number;
        deliveryRateGrowthPercent: number;
        deliveryRate: number;
        totalRecipientsGrowthPercent: number;
        totalRecipients: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsPerforming({ startTime, endTime, }: {
        startTime?: string;
        endTime?: string;
    }): CancelablePromise<{
        abandonedCheckout: {
            perRecipient: number;
            conversionValue: number;
            placedOrderRate: number;
            totalOrderPlaced: number;
            deliveryRate: number;
            totalRecipients: number;
        };
    }>;
}
