/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { LoginDto } from '../models/LoginDto';

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
  }): CancelablePromise<GetResult_any_any_any_> {
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
