/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CollectionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createCollection({
    requestBody,
  }: {
    requestBody: CreateCollectionDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/collection',
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
  public getCollection({
    id,
  }: {
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/collection/{id}',
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
  public updateCollection({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateCollectionDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/collection/{id}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteCollection({
    id,
  }: {
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/collection/{id}',
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
