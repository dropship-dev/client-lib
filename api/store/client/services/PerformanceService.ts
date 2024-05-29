/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { coordinate } from '../models/coordinate';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PerformanceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getVisitorViewProductByFulfillment({
    fulfillmentAgencyId,
    startDate,
    endDate,
  }: {
    fulfillmentAgencyId: number,
    startDate: string,
    endDate: string,
  }): CancelablePromise<{
    coordinates: coordinate;
    viewer: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/performance/{fulfillmentAgencyId}/get-visitor-by-fulfilmment-agency',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
      query: {
        'startDate': startDate,
        'endDate': endDate,
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
