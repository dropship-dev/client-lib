/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStoreTagDto } from '../models/CreateStoreTagDto';
import type { Tag } from '../models/Tag';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoreTagService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Tag Ok
   * @throws ApiError
   */
  public createStoreTag({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateStoreTagDto,
  }): CancelablePromise<Tag> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/tag',
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
   * @returns Tag Ok
   * @throws ApiError
   */
  public getStoreTags({
    storeId,
    search,
    limit = 10,
  }: {
    storeId: string,
    search?: string,
    limit?: number,
  }): CancelablePromise<Array<Tag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/tag',
      path: {
        'storeId': storeId,
      },
      query: {
        'search': search,
        'limit': limit,
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
   * @returns Tag Ok
   * @throws ApiError
   */
  public deleteStoreTag({
    storeId,
    name,
  }: {
    storeId: string,
    name: string,
  }): CancelablePromise<Tag> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/tag/{name}',
      path: {
        'storeId': storeId,
        'name': name,
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
