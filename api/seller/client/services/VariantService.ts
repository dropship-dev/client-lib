/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlatformVariant } from '../models/PlatformVariant';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantsDto } from '../models/UpdateVariantsDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';

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
   * @returns ProductVariant Ok
   * @throws ApiError
   */
  public updateVariant({
    storeId,
    productId,
    id,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    id: number,
    requestBody: UpdateVariantDto,
  }): CancelablePromise<ProductVariant> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}/variant/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
   * @returns ProductVariant Ok
   * @throws ApiError
   */
  public deleteVariant({
    storeId,
    productId,
    id,
  }: {
    storeId: string,
    productId: number,
    id: number,
  }): CancelablePromise<ProductVariant> {
    return this.httpRequest.request({
      method: 'DELETE',
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

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public updateVariants({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: UpdateVariantsDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}/variant',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public deleteVariants({
    storeId,
    productId,
    ids,
  }: {
    storeId: string,
    productId: number,
    ids: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}/variant',
      path: {
        'storeId': storeId,
        'productId': productId,
      },
      query: {
        'ids': ids,
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
   * @returns ProductVariant Ok
   * @throws ApiError
   */
  public updateVariantStatus({
    storeId,
    productId,
    id,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    id: number,
    requestBody: UpdateVariantStatusDto,
  }): CancelablePromise<ProductVariant> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/variant/{id}/status',
      path: {
        'storeId': storeId,
        'productId': productId,
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

}
