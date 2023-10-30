/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeUserPasswordDto } from '../models/ChangeUserPasswordDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentUser } from '../models/FulfillmentUser';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getUser(): CancelablePromise<(User & {
    FulfillmentUser: Array<(FulfillmentUser & {
      FulfillmentAgency: FulfillmentAgency;
    })>;
  })> {
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateUser({
    requestBody,
  }: {
    requestBody: UpdateUserDto,
  }): CancelablePromise<(User & {
    FulfillmentUser: Array<(FulfillmentUser & {
      FulfillmentAgency: FulfillmentAgency;
    })>;
  })> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user',
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

  /**
   * @returns User Ok
   * @throws ApiError
   */
  public deleteUser(): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'DELETE',
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

  /**
   * @returns User Ok
   * @throws ApiError
   */
  public changeUserPassword({
    requestBody,
  }: {
    requestBody: ChangeUserPasswordDto,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user/password',
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getUserById({
    id,
  }: {
    id: string,
  }): CancelablePromise<(User & {
    FulfillmentUser: Array<(FulfillmentUser & {
      FulfillmentAgency: FulfillmentAgency;
    })>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/{id}',
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateUserById({
    id,
    requestBody,
  }: {
    id: string,
    requestBody: UpdateUserDto,
  }): CancelablePromise<(User & {
    FulfillmentUser: Array<(FulfillmentUser & {
      FulfillmentAgency: FulfillmentAgency;
    })>;
  })> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user/{id}',
      path: {
        'id': id,
      },
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

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public handleEventPaypalService({
    agencyId,
    paymentId,
    requestBody,
  }: {
    agencyId: number,
    paymentId: number,
    requestBody: any,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webhook/paypal-service/{agencyId}/payment/{paymentId}',
      path: {
        'agencyId': agencyId,
        'paymentId': paymentId,
      },
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
