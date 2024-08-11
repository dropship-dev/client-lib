/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StatisticsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatisticsStoreAbandonmentCheckout({
    storeId,
    startTime = '2023-01-02T00:00:00.000Z',
    endTime = '2024-08-11T10:44:29.010Z',
  }: {
    storeId: string,
    startTime?: string,
    endTime?: string,
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/statistics/abandonments-checkout/store/{storeId}',
      path: {
        'storeId': storeId,
      },
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
