/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from '../models/Collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CollectionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Collection Ok
   * @throws ApiError
   */
  public getCollection({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<Collection> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/collection/{id}',
      path: {
        'id': id,
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
   * @returns Collection Ok
   * @throws ApiError
   */
  public getCrossSell({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<Collection> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/cross-sell/{id}',
      path: {
        'id': id,
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

}
