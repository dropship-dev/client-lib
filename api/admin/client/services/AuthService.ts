/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentUser } from '../models/FulfillmentUser';
import type { LoginDto } from '../models/LoginDto';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public login({
    requestBody,
  }: {
    requestBody: LoginDto,
  }): CancelablePromise<(User & {
    FulfillmentUser: Array<(FulfillmentUser & {
      FulfillmentAgency: FulfillmentAgency;
    })>;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

}