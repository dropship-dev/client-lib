/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StoreTagService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
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
  }): CancelablePromise<Array<{
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }>> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getProductTags({
    storeId,
    productId,
    search,
  }: {
    storeId: string,
    productId: number,
    search?: string,
  }): CancelablePromise<Array<{
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/tag',
      path: {
        'storeId': storeId,
        'productId': productId,
      },
      query: {
        'search': search,
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
