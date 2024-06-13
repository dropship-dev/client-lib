/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { Collection } from '../models/Collection';
import type { CollectionStatus } from '../models/CollectionStatus';
import type { CollectionType } from '../models/CollectionType';
import type { ConditionCollection } from '../models/ConditionCollection';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { CrossSell } from '../models/CrossSell';
import type { CrossSellDto } from '../models/CrossSellDto';
import type { JsonValue } from '../models/JsonValue';
import type { operatorCondition } from '../models/operatorCondition';
import type { Photos } from '../models/Photos';
import type { Product } from '../models/Product';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { UpdateCollectionStatusDto } from '../models/UpdateCollectionStatusDto';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';

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
    nextPageIndex?: string,
    startDate?: string,
    endDate?: string,
    search?: string,
    collectionType?: CollectionType,
    collectionStatus?: CollectionStatus,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<Collection>;
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
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<{
    updatedAt: string;
    createdAt: string;
    SEO: JsonValue;
    description: string;
    queriesRaw: string;
    condition: ConditionCollection;
    photos: Photos;
    name: string;
    status: CollectionStatus;
    type: CollectionType;
    storeId: string;
    id: number;
    products: Array<Product>;
  }> {
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
      url: '/store/{storeId}/collection/get-products-by-condtions-collection',
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
  public updateStatusCollection({
    id,
    storeId,
    requestBody,
  }: {
    id: number,
    storeId: string,
    requestBody: UpdateCollectionStatusDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/collection/{id}/status',
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
   * @returns string Ok
   * @throws ApiError
   */
  public createCrossSell({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CrossSellDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/cross-sell',
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
  public getCrossSell({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<(CrossSell & {
    Product: Array<Product>;
    Collection: Array<Collection>;
  })> {
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

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public updateCrossSell({
    id,
    storeId,
    requestBody,
  }: {
    id: number,
    storeId: string,
    requestBody: CrossSellDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/cross-sell/{id}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteCrossSell({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<(CrossSell & {
    Product: Array<Product>;
    Collection: Array<Collection>;
  })> {
    return this.httpRequest.request({
      method: 'DELETE',
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

  /**
   * @returns void
   * @throws ApiError
   */
  public updateStatusCrossSell({
    id,
    storeId,
    requestBody,
  }: {
    id: number,
    storeId: string,
    requestBody: UpdateCrossSellStatusDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/cross-sell/{id}/status',
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
   * @returns BatchPayload Ok
   * @throws ApiError
   */
  public deleteManyCrossSell({
    id,
    storeId,
  }: {
    id: Array<number>,
    storeId: string,
  }): CancelablePromise<BatchPayload> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/cross-sell/delete-many-cross-sells',
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

}
