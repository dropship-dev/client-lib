/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoostSale } from '../models/BoostSale';
import type { Collection } from '../models/Collection';
import type { CollectionStatus } from '../models/CollectionStatus';
import type { CollectionType } from '../models/CollectionType';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { operatorCondition } from '../models/operatorCondition';
import type { Photos } from '../models/Photos';
import type { Product } from '../models/Product';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { UpdateCollectionStatusDto } from '../models/UpdateCollectionStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CollectionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Collection Ok
   * @throws ApiError
   */
  public createCollection({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateCollectionDto,
  }): CancelablePromise<Collection> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/collection',
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
  public getAllCollection({
    storeId,
    pageSize = 20,
    nextPageIndex,
    startDate,
    endDate,
    search,
    collectionType,
    collectionStatus,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
    startDate?: string,
    endDate?: string,
    search?: string,
    collectionType?: CollectionType,
    collectionStatus?: CollectionStatus,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(Collection & {
      Product: Array<{
        permalink: string;
        deleted: boolean;
        isEnable: boolean;
        isActive: boolean;
        photos: Photos;
        name: string;
        ProductVariant: Array<{
          compareAtPrice: number;
          price: number;
        }>;
        id: number;
      }>;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/collection',
      path: {
        'storeId': storeId,
      },
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'startDate': startDate,
        'endDate': endDate,
        'search': search,
        'collectionType': collectionType,
        'collectionStatus': collectionStatus,
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
  public getCollection({
    id,
    storeId,
    isActiveProduct,
    isEnableProduct,
    deletedProduct,
  }: {
    id: number,
    storeId: string,
    isActiveProduct?: boolean,
    isEnableProduct?: boolean,
    deletedProduct?: boolean,
  }): CancelablePromise<(Collection & {
    Product: Array<{
      permalink: string;
      deleted: boolean;
      isEnable: boolean;
      isActive: boolean;
      photos: Photos;
      name: string;
      ProductVariant: Array<{
        compareAtPrice: number;
        price: number;
      }>;
      id: number;
    }>;
    BoostSale: Array<BoostSale>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/collection/{id}',
      path: {
        'id': id,
        'storeId': storeId,
      },
      query: {
        'isActiveProduct': isActiveProduct,
        'isEnableProduct': isEnableProduct,
        'deletedProduct': deletedProduct,
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
  public deleteCollection({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
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
   * @returns void
   * @throws ApiError
   */
  public updateCollection({
    id,
    storeId,
    requestBody,
  }: {
    id: number,
    storeId: string,
    requestBody: UpdateCollectionDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/collection/{id}',
      path: {
        'id': id,
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
   * @returns Product Ok
   * @throws ApiError
   */
  public getProductByConditions({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: operatorCondition,
  }): CancelablePromise<Array<Product>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/collection/get-products-by-conditions-collection',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteManyCollection({
    id,
    storeId,
  }: {
    id: Array<number>,
    storeId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/collection/delete-many-collection',
      path: {
        'storeId': storeId,
      },
      query: {
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
   * @returns void
   * @throws ApiError
   */
  public updateStatusesCollection({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateCollectionStatusDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/collection/status',
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

}
