/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Setting } from '../models/Setting';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SettingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Setting Ok
   * @throws ApiError
   */
  public getSetting({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId: number,
    storeId?: string,
  }): CancelablePromise<Setting> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/setting',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'storeId': storeId,
      },
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

}
