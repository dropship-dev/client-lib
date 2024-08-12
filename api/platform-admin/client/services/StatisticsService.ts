/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatisticsDisplayType } from '../models/StatisticsDisplayType';
import type { StatisticsOverviewAbandonedCheckout } from '../models/StatisticsOverviewAbandonedCheckout';
import type { StatisticsOverviewConversionValue } from '../models/StatisticsOverviewConversionValue';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StatisticsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsBusinessPerformancesSummary({
    startTime = '2023-01-02T00:00:00.000Z',
    endTime = '2024-08-12T07:32:37.982Z',
  }: {
    startTime?: string,
    endTime?: string,
  }): CancelablePromise<{
    perRecipientGrowthPercent: number;
    perRecipientPreviousPeriod: number;
    perRecipient: number;
    automationPercent: number;
    automationGrowthPercent: number;
    automationPreviousPeriod: number;
    automation: number;
    recipientGrowthPercent: number;
    recipientPreviousPeriod: number;
    recipient: number;
    attributeRevenuePercent: number;
    attributeGrowthPercent: number;
    attributePreviousPeriod: number;
    attributeRevenue: number;
    revenueGrowthPercent: number;
    revenuePreviousPeriod: number;
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
    endTime = '2024-08-12T07:32:38.004Z',
    timezone,
  }: {
    startTime?: string,
    endTime?: string,
    timezone?: string,
  }): CancelablePromise<{
    totalRecipientsGrowthPercent: number;
    totalRecipients: number;
    conversionRateGrowthPercent: number;
    conversionRate: number;
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
    endTime = '2024-08-12T07:32:38.045Z',
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
    endTime = '2024-08-12T07:32:38.062Z',
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
