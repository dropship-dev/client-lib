/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlatformVariant } from '../models/PlatformVariant';
import type { ProductVariant } from '../models/ProductVariant';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VariantService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getVariant({
    storeId,
    productId,
    id,
  }: {
    storeId: string,
    productId: number,
    id: number,
  }): CancelablePromise<(ProductVariant & {
    PlatformVariant: PlatformVariant;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/variant/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public getAllVariant({
    storeId,
    productId,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: string,
    productId: number,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(ProductVariant & {
      PlatformVariant: PlatformVariant;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/variant',
      path: {
        'storeId': storeId,
        'productId': productId,
      },
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
