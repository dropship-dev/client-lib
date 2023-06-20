/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Theme } from '../models/Theme';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Theme Ok
   * @throws ApiError
   */
  public getActiveTheme({
    storeId,
  }: {
    storeId: number,
  }): CancelablePromise<Theme> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/active',
      path: {
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

  /**
   * @returns Theme Ok
   * @throws ApiError
   */
  public getTheme({
    storeId,
    id,
  }: {
    storeId: number,
    id: number,
  }): CancelablePromise<Theme> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/{id}',
      path: {
        'storeId': storeId,
        'id': id,
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
