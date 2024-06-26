/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStaffDto } from '../models/CreateStaffDto';
import type { StoreUser } from '../models/StoreUser';
import type { UpdateStaffDto } from '../models/UpdateStaffDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StaffService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns StoreUser Ok
   * @throws ApiError
   */
  public createStaff({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateStaffDto,
  }): CancelablePromise<StoreUser> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/staff',
      path: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStaff({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<(StoreUser & {
    User: {
      avatar: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: string;
    };
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/staff',
      path: {
        'storeId': storeId,
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
   * @returns StoreUser Ok
   * @throws ApiError
   */
  public updateStaff({
    storeId,
    userId,
    requestBody,
  }: {
    storeId: string,
    userId: string,
    requestBody: UpdateStaffDto,
  }): CancelablePromise<StoreUser> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/staff/{userId}',
      path: {
        'storeId': storeId,
        'userId': userId,
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
   * @returns StoreUser Ok
   * @throws ApiError
   */
  public deleteStaff({
    storeId,
    userId,
  }: {
    storeId: string,
    userId: string,
  }): CancelablePromise<StoreUser> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/staff/{userId}',
      path: {
        'storeId': storeId,
        'userId': userId,
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
