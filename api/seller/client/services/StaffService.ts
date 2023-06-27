/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStaffDto } from '../models/CreateStaffDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateStaffDto } from '../models/UpdateStaffDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StaffService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStaff({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: CreateStaffDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
    storeId: number,
  }): CancelablePromise<Array<({
    User: {
      updatedAt: string;
      createdAt: string;
      name: string;
      avatar: string;
      email: string;
      id: string;
    };
  } & GetResult_any_any_any_)>> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateStaff({
    storeId,
    userId,
    requestBody,
  }: {
    storeId: number,
    userId: string,
    requestBody: UpdateStaffDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteStaff({
    storeId,
    userId,
  }: {
    storeId: number,
    userId: string,
  }): CancelablePromise<GetResult_any_any_any_> {
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
