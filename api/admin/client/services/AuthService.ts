/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { LoginDto } from '../models/LoginDto';
import type { UserRole } from '../models/UserRole';

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
  }): CancelablePromise<{
    maxOwnedStores: number;
    role: UserRole;
    email: string;
    name: string;
    FulfillmentUser: Array<{
      FulfillmentAgency: FulfillmentAgency;
    }>;
    id: string;
  }> {
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public signInPusher({
    socketId,
    storeId,
  }: {
    socketId: string,
    storeId: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/auth/pusher/user-auth',
      query: {
        'socket_id': socketId,
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
