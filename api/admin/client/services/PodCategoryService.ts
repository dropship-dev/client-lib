/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';
import type { CreateCategoryDto } from '../models/CreateCategoryDto';
import type { GetListCategoryByCatalog } from '../models/GetListCategoryByCatalog';
import type { GetListCategoryByCategory } from '../models/GetListCategoryByCategory';
import type { LayoutCategory } from '../models/LayoutCategory';
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodCategoryService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Category Ok
   * @throws ApiError
   */
  public createCategory({
    requestBody,
  }: {
    requestBody: CreateCategoryDto,
  }): CancelablePromise<Category> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/category',
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
  public getListCategory({
    fulfillmentAgencyId,
    storeId,
    search,
    startDate,
    endDate,
    layout,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
    search?: string,
    startDate?: string,
    endDate?: string,
    layout?: LayoutCategory,
  }): CancelablePromise<(Array<GetListCategoryByCatalog> | Array<GetListCategoryByCategory>)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/category',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'storeId': storeId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'layout': layout,
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
   * @returns Category Ok
   * @throws ApiError
   */
  public updateCategory({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateCategoryDto,
  }): CancelablePromise<Category> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/pod/category/{id}',
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
   * @returns Category Ok
   * @throws ApiError
   */
  public deleteCategory({
    id,
  }: {
    id: number,
  }): CancelablePromise<Category> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/pod/category/{id}',
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
   * @returns Category Ok
   * @throws ApiError
   */
  public listAllCategory({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<Array<Category>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/category/list',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
