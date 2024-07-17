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
    startTime,
    endTime,
  }: {
    storeId: string,
    startTime: string,
    endTime: string,
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
