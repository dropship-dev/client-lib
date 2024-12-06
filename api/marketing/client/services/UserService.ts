/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseGetUser } from '../models/ResponseGetUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns ResponseGetUser Ok
   * @throws ApiError
   */
  public getUser(): CancelablePromise<ResponseGetUser> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user',
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
