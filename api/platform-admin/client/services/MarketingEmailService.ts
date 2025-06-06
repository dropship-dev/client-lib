/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatisticsDisplayType } from '../models/StatisticsDisplayType';
import type { StatisticsOverviewAbandonedCheckout } from '../models/StatisticsOverviewAbandonedCheckout';
import type { StatisticsOverviewConversionValue } from '../models/StatisticsOverviewConversionValue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MarketingEmailService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsBusinessPerformancesSummary({
    startTime = '2023-01-02T00:00:00.000Z',
    endTime,
  }: {
    startTime?: string,
    endTime?: string,
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/statistics/business-performances',
      query: {
        'startTime': startTime,
        'endTime': endTime,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsOverview({
    startTime = '2023-01-02T00:00:00.000Z',
    endTime,
    timezone,
  }: {
    startTime?: string,
    endTime?: string,
    timezone?: string,
  }): CancelablePromise<{
    totalRecipientsGrowthPercent: number;
    totalRecipients: number;
    conversionValueGrowthPercent: number;
    conversionValue: number;
    displayType: StatisticsDisplayType;
    totalRecipientsStatistics: Array<StatisticsOverviewAbandonedCheckout>;
    conversionValueStatistics: Array<StatisticsOverviewConversionValue>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/statistics/automation-overview',
      query: {
        'startTime': startTime,
        'endTime': endTime,
        'timezone': timezone,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsAutomationMetrics({
    startTime = '2023-01-02T00:00:00.000Z',
    endTime,
  }: {
    startTime?: string,
    endTime?: string,
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/statistics/automation-metrics',
      query: {
        'startTime': startTime,
        'endTime': endTime,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsPerforming({
    startTime = '2023-01-02T00:00:00.000Z',
    endTime,
  }: {
    startTime?: string,
    endTime?: string,
  }): CancelablePromise<{
    abandonedCheckout: {
      perRecipient: number;
      conversionValue: number;
      placedOrderRate: number;
      totalOrderPlaced: number;
      deliveryRate: number;
      totalRecipients: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/statistics/performing',
      query: {
        'startTime': startTime,
        'endTime': endTime,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
