/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStoreTagDto } from '../models/CreateStoreTagDto';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StoreTagService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStoreTag({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateStoreTagDto,
  }): CancelablePromise<{
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
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
  public deleteStoreTag({
    storeId,
    name,
  }: {
    storeId: string,
    name: string,
  }): CancelablePromise<{
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
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
  /**
   * @returns void
   * @throws ApiError
   */
  public connectProductTag({
    storeId,
    productId,
    name,
  }: {
    storeId: string,
    productId: number,
    name: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/tag/{name}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public deleteProductTag({
    storeId,
    productId,
    name,
  }: {
    storeId: string,
    productId: number,
    name: string,
  }): CancelablePromise<{
    podTemplateId: number;
    campaignId: string;
    isEnable: boolean;
    isActive: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    permalink: string;
    deleted: boolean;
    platformProductId: number;
    description: string;
    photos: PrismaJson_Photos;
    shippingFeeAdditional: number;
    shippingFee: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}/tag/{name}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
