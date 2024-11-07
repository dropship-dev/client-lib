/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MarketingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns User Ok
   * @throws ApiError
   */
  public createMarketingAccount({
    requestBody,
  }: {
    requestBody: CreateMarketingAccount,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing',
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
