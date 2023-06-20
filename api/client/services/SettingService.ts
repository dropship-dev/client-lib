/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { Setting } from '../models/Setting';
import type { UpdateSettingDto } from '../models/UpdateSettingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SettingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Setting Ok
   * @throws ApiError
   */
  public getSetting(): CancelablePromise<Setting> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/setting',
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * @returns BatchPayload Ok
   * @throws ApiError
   */
  public updateSetting({
    requestBody,
  }: {
    requestBody: UpdateSettingDto,
  }): CancelablePromise<BatchPayload> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/setting/{id}',
      body: requestBody,
      mediaType: 'application/json',
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
