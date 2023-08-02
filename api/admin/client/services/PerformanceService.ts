/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PerformanceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns void
   * @throws ApiError
   */
  public getPerformance({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-02T10:17:32.966Z',
    storeId,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance',
      query: {
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
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
   * @returns void
   * @throws ApiError
   */
  public getProductPerformance({
    startDate = '2023-01-01T00:00:00.000Z',
    endDate = '2023-08-02T10:17:32.967Z',
    storeId,
  }: {
    startDate?: string,
    endDate?: string,
    storeId?: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/product',
      query: {
        'startDate': startDate,
        'endDate': endDate,
        'storeId': storeId,
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
