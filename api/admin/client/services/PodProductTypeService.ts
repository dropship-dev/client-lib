/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductTypeDto } from '../models/CreateProductTypeDto';
import type { PodProductType } from '../models/PodProductType';
import type { UpdateProductTypeDto } from '../models/UpdateProductTypeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodProductTypeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns PodProductType Ok
   * @throws ApiError
   */
  public createProductType({
    requestBody,
  }: {
    requestBody: CreateProductTypeDto,
  }): CancelablePromise<PodProductType> {
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
   * @returns PodProductType Ok
   * @throws ApiError
   */
  public getAllProductType({
    podCategoryId,
  }: {
    podCategoryId: number,
  }): CancelablePromise<Array<PodProductType>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/product-type',
      query: {
        'podCategoryId': podCategoryId,
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
   * @returns PodProductType Ok
   * @throws ApiError
   */
  public updateProductType({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateProductTypeDto,
  }): CancelablePromise<PodProductType> {
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
   * @returns PodProductType Ok
   * @throws ApiError
   */
  public deleteProductType({
    id,
  }: {
    id: number,
  }): CancelablePromise<PodProductType> {
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
