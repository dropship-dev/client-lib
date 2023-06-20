/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from '../models/Currency';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CurrencyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Currency Ok
   * @throws ApiError
   */
  public getCurrency({
    id,
  }: {
    id: number,
  }): CancelablePromise<Currency> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/currency/{id}',
      path: {
        'id': id,
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
