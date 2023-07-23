/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { AdminTag } from '../models/AdminTag';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { Photos } from '../models/Photos';
import type { PlatformProduct } from '../models/PlatformProduct';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Store } from '../models/Store';
import type { UpdatePlatformProductDto } from '../models/UpdatePlatformProductDto';
import type { UpdatePlatformProductStatusDto } from '../models/UpdatePlatformProductStatusDto';
import type { UpdatePlatformProductStatusesDto } from '../models/UpdatePlatformProductStatusesDto';
import type { VariantOptions } from '../models/VariantOptions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlatformProductService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public createPlatformProduct({
    requestBody,
  }: {
    requestBody: CreatePlatformProductDto,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform-product',
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
  public getAllPlatformProduct({
    pageSize = 20,
    nextPageIndex,
    name,
    tags,
    isActive,
    startPrice,
    endPrice,
  }: {
    pageSize?: number,
    nextPageIndex?: number,
    name?: string,
    tags?: Array<string>,
    isActive?: boolean,
    startPrice?: number,
    endPrice?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      Product: Array<{
        id: number;
      }>;
      Tag: Array<AdminTag>;
      PlatformVariant: Array<PlatformVariant>;
      updatedAt: string;
      createdAt: string;
      isEnable: boolean;
      isActive: boolean;
      supplierContact: string;
      variantOption: VariantOptions;
      photos: Photos;
      details: string;
      description: string;
      name: string;
      SKU: string;
      id: number;
      noStores: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product',
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'name': name,
        'tags': tags,
        'isActive': isActive,
        'startPrice': startPrice,
        'endPrice': endPrice,
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
  public deletePlatformProducts({
    ids,
  }: {
    ids: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product',
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
   * @returns string Ok
   * @throws ApiError
   */
  public updatePlatformProductStatuses({
    requestBody,
  }: {
    requestBody: UpdatePlatformProductStatusesDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/status',
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
  public getPlatformProduct({
    platformProductId,
  }: {
    platformProductId: number,
  }): CancelablePromise<(PlatformProduct & {
    Tag: Array<AdminTag>;
    PlatformVariant: Array<PlatformVariant>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}',
      path: {
        'platformProductId': platformProductId,
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
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public updatePlatformProduct({
    platformProductId,
    requestBody,
  }: {
    platformProductId: number,
    requestBody: UpdatePlatformProductDto,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}',
      path: {
        'platformProductId': platformProductId,
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
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public deletePlatformProduct({
    platformProductId,
  }: {
    platformProductId: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}',
      path: {
        'platformProductId': platformProductId,
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
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public updatePlatformProductStatus({
    platformProductId,
    requestBody,
  }: {
    platformProductId: number,
    requestBody: UpdatePlatformProductStatusDto,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/status',
      path: {
        'platformProductId': platformProductId,
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
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public addPlatformProductTag({
    platformProductId,
    requestBody,
  }: {
    platformProductId: number,
    requestBody: AddPlatformProductTagDto,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/tag',
      path: {
        'platformProductId': platformProductId,
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
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public deletePlatformProductTag({
    platformProductId,
    tagId,
  }: {
    platformProductId: number,
    tagId: string,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/tag/{tagId}',
      path: {
        'platformProductId': platformProductId,
        'tagId': tagId,
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
  public getPlatformProductStore({
    platformProductId,
  }: {
    platformProductId: number,
  }): CancelablePromise<Array<(Store & {
    minPriceOnStore: number;
    maxPriceOnStore: number;
    statusOnStore: boolean;
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}/store',
      path: {
        'platformProductId': platformProductId,
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
