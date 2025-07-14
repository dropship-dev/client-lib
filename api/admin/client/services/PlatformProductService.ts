/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentPlatform } from '../models/_36_Enums_FulfillmentPlatform';
import type { AddPlatformProductTagDto } from '../models/AddPlatformProductTagDto';
import type { AdminTag } from '../models/AdminTag';
import type { CreatePlatformProductDto } from '../models/CreatePlatformProductDto';
import type { GroupPlatformVariant } from '../models/GroupPlatformVariant';
import type { PlatformProduct } from '../models/PlatformProduct';
import type { PlatformProductStore } from '../models/PlatformProductStore';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdatePlatformProductDto } from '../models/UpdatePlatformProductDto';
import type { UpdatePlatformProductStatusDto } from '../models/UpdatePlatformProductStatusDto';
import type { UpdatePlatformProductStatusesDto } from '../models/UpdatePlatformProductStatusesDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlatformProductService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createPlatformProduct({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: CreatePlatformProductDto,
  }): CancelablePromise<{
    collectionDefaultId: number;
    priceUpdatedAt: string;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatformSupplierId: number;
    fulfillmentPlatform: 'BETTA_SUP';
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
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
    fulfillmentAgencyId,
    pageSize = 20,
    nextPageIndex,
    search,
    tags,
    isActive,
    startPrice,
    endPrice,
    fulfillmentPlatform,
    haveCollection,
  }: {
    fulfillmentAgencyId: number,
    pageSize?: number,
    nextPageIndex?: number,
    search?: string,
    tags?: Array<string>,
    isActive?: boolean,
    startPrice?: number,
    endPrice?: number,
    fulfillmentPlatform?: any,
    haveCollection?: boolean,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      collectionDefaultId: number;
      priceUpdatedAt: string;
      isInSyncWithFulfillmentPlatform: boolean;
      fulfillmentPlatformSupplierId: number;
      fulfillmentPlatform: 'BETTA_SUP';
      fulfillmentPlatformQuoteId: string;
      isEnable: boolean;
      supplierContact: string;
      variantOption: PrismaJson_VariantOptions;
      availableSet: PrismaJson_AvailableSet;
      SKU: string;
      details: string;
      deleted: boolean;
      photos: PrismaJson_Photos;
      description: string;
      isActive: boolean;
      name: string;
      updatedAt: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: number;
      FulfillmentPlatformSupplier: {
        platform: 'BETTA_SUP';
      };
      Product: Array<{
        platformProductId: number;
        storeId: string;
        id: number;
      }>;
      Tag: Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
      }>;
      GroupPlatformVariant: Array<({
        PlatformVariant: Array<{
          photo: string;
          SKU: string;
          name: string;
          id: number;
        }>;
      } & {
        cost: PrismaJson_PlatformCostInfo;
        platformProductId: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
      })>;
      PlatformVariant: Array<{
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        platformProductId: number;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
      }>;
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
        'search': search,
        'tags': tags,
        'isActive': isActive,
        'startPrice': startPrice,
        'endPrice': endPrice,
        'fulfillmentPlatform': fulfillmentPlatform,
        'haveCollection': haveCollection,
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
    fulfillmentAgencyId,
    ids,
  }: {
    fulfillmentAgencyId: number,
    ids: Array<number>,
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
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: UpdatePlatformProductStatusesDto,
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
    fulfillmentAgencyId,
    platformProductId,
    isGetAllPlatformProductStore,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    isGetAllPlatformProductStore?: boolean,
  }): CancelablePromise<(PlatformProduct & {
    GroupPlatformVariant: Array<(GroupPlatformVariant & {
      PlatformVariant: Array<{
        SKU: string;
        name: string;
        photo: string;
        id: number;
      }>;
    })>;
    FulfillmentPlatformSupplier: {
      platform: _36_Enums_FulfillmentPlatform;
    } | null;
    PlatformVariant: Array<PlatformVariant>;
    Tag: Array<AdminTag>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'isGetAllPlatformProductStore': isGetAllPlatformProductStore,
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
  public updatePlatformProduct({
    fulfillmentAgencyId,
    platformProductId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    requestBody: UpdatePlatformProductDto,
  }): CancelablePromise<{
    collectionDefaultId: number;
    priceUpdatedAt: string;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatformSupplierId: number;
    fulfillmentPlatform: 'BETTA_SUP';
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deletePlatformProduct({
    fulfillmentAgencyId,
    platformProductId,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
  }): CancelablePromise<{
    collectionDefaultId: number;
    priceUpdatedAt: string;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatformSupplierId: number;
    fulfillmentPlatform: 'BETTA_SUP';
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public updatePlatformProductStatus({
    fulfillmentAgencyId,
    platformProductId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    requestBody: UpdatePlatformProductStatusDto,
  }): CancelablePromise<{
    collectionDefaultId: number;
    priceUpdatedAt: string;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatformSupplierId: number;
    fulfillmentPlatform: 'BETTA_SUP';
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public addPlatformProductTag({
    fulfillmentAgencyId,
    platformProductId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    requestBody: AddPlatformProductTagDto,
  }): CancelablePromise<{
    collectionDefaultId: number;
    priceUpdatedAt: string;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatformSupplierId: number;
    fulfillmentPlatform: 'BETTA_SUP';
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deletePlatformProductTag({
    fulfillmentAgencyId,
    platformProductId,
    tagId,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    tagId: string,
  }): CancelablePromise<{
    collectionDefaultId: number;
    priceUpdatedAt: string;
    isInSyncWithFulfillmentPlatform: boolean;
    fulfillmentPlatformSupplierId: number;
    fulfillmentPlatform: 'BETTA_SUP';
    fulfillmentPlatformQuoteId: string;
    isEnable: boolean;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
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
    fulfillmentAgencyId,
    platformProductId,
    isGetAllPlatformProductStore,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    isGetAllPlatformProductStore?: boolean,
  }): CancelablePromise<Array<PlatformProductStore>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}/store',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'isGetAllPlatformProductStore': isGetAllPlatformProductStore,
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
