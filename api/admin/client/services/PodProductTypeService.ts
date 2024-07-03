/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductTypeDto } from '../models/CreateProductTypeDto';
import type { ProductType } from '../models/ProductType';
import type { UpdateProductTypeDto } from '../models/UpdateProductTypeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodProductTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns ProductType Ok
   * @throws ApiError
   */
  public createProductType({
    requestBody,
  }: {
    requestBody: CreateProductTypeDto,
  }): CancelablePromise<ProductType> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/product-type',
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
   * @returns ProductType Ok
   * @throws ApiError
   */
  public getAllProductType({
    categoryId,
  }: {
    categoryId: number,
  }): CancelablePromise<Array<ProductType>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/product-type',
      query: {
        'categoryId': categoryId,
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
   * @returns ProductType Ok
   * @throws ApiError
   */
  public updateProductType({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateProductTypeDto,
  }): CancelablePromise<ProductType> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/pod/product-type/{id}',
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
   * @returns ProductType Ok
   * @throws ApiError
   */
  public deleteProductType({
    id,
  }: {
    id: number,
  }): CancelablePromise<ProductType> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/pod/product-type/{id}',
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
