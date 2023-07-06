/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTag } from '../models/AdminTag';
import type { Product } from '../models/Product';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { UpdateProductStatusDto } from '../models/UpdateProductStatusDto';
import type { VariantOptions } from '../models/VariantOptions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllProduct({
    storeId,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: number,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(Product & {
      PlatformProduct: {
        variantOption: VariantOptions;
        Tag: Array<AdminTag>;
      };
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product',
      path: {
        'storeId': storeId,
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
   * @returns Product Ok
   * @throws ApiError
   */
  public updateProduct({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: number,
    productId: number,
    requestBody: UpdateProductDto,
  }): CancelablePromise<Product> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}',
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
  public deleteProduct({
    storeId,
    productId,
  }: {
    storeId: number,
    productId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
   * @returns Product Ok
   * @throws ApiError
   */
  public updateProductStatus({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: number,
    productId: number,
    requestBody: UpdateProductStatusDto,
  }): CancelablePromise<Product> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/status',
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

}
