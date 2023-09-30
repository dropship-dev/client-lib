/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { AdminTag } from '../models/AdminTag';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { Photos } from '../models/Photos';
import type { PlatformProduct } from '../models/PlatformProduct';
import type { PlatformProductStore } from '../models/PlatformProductStore';
import type { PlatformVariant } from '../models/PlatformVariant';
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
    fulfillmentAgencyId = 1,
  }: {
    requestBody: CreatePlatformProductDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform-product',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getAllPlatformProduct({
    fulfillmentAgencyId = 1,
    pageSize = 20,
    nextPageIndex,
    name,
    tags,
    isActive,
    startPrice,
    endPrice,
  }: {
    fulfillmentAgencyId?: number,
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
      fulfillmentAgencyId: number;
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
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
    fulfillmentAgencyId = 1,
  }: {
    ids: Array<number>,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
    fulfillmentAgencyId = 1,
  }: {
    requestBody: UpdatePlatformProductStatusesDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/status',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getPlatformProduct({
    platformProductId,
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    fulfillmentAgencyId?: number,
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

  /**
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public updatePlatformProduct({
    platformProductId,
    requestBody,
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    requestBody: UpdatePlatformProductDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}',
      path: {
        'platformProductId': platformProductId,
      },
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

  /**
   * @returns PlatformProduct Ok
   * @throws ApiError
   */
  public updatePlatformProductStatus({
    platformProductId,
    requestBody,
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    requestBody: UpdatePlatformProductStatusDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/status',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    requestBody: AddPlatformProductTagDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/tag',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    tagId: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<PlatformProduct> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/tag/{tagId}',
      path: {
        'platformProductId': platformProductId,
        'tagId': tagId,
      },
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

  /**
   * @returns PlatformProductStore Ok
   * @throws ApiError
   */
  public getPlatformProductStore({
    platformProductId,
    fulfillmentAgencyId = 1,
  }: {
    platformProductId: number,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<Array<PlatformProductStore>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}/store',
      path: {
        'platformProductId': platformProductId,
      },
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
