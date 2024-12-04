/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { operatorCondition } from '../models/operatorCondition';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { UpdateCollectionStatusDto } from '../models/UpdateCollectionStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CollectionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createCollection({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateCollectionDto,
  }): CancelablePromise<{
    SEO: any;
    condition: PrismaJson_ConditionCollection;
    description: string;
    photos: PrismaJson_Photos;
    type: _36_Enums_CollectionType;
    status: _36_Enums_CollectionStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
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
    collectionType?: _36_Enums_CollectionType,
    collectionStatus?: _36_Enums_CollectionStatus,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<({
      Product: Array<{
        isEnable: boolean;
        isActive: boolean;
        permalink: string;
        deleted: boolean;
        photos: PrismaJson_Photos;
        name: string;
        id: number;
        ProductVariant: Array<{
          compareAtPrice: number;
          price: number;
        }>;
      }>;
    } & {
      SEO: any;
      condition: PrismaJson_ConditionCollection;
      description: string;
      photos: PrismaJson_Photos;
      type: _36_Enums_CollectionType;
      status: _36_Enums_CollectionStatus;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
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
  }): CancelablePromise<({
    Product: Array<{
      isEnable: boolean;
      isActive: boolean;
      permalink: string;
      deleted: boolean;
      photos: PrismaJson_Photos;
      name: string;
      id: number;
      ProductVariant: Array<{
        compareAtPrice: number;
        price: number;
      }>;
    }>;
    BoostSale: Array<{
      rootProductId: number;
      triggerBy: _36_Enums_BoostSaleTriggerType;
      marketingType: _36_Enums_MarketingType;
      placement: PrismaJson_PlacementBoostSaleType;
      endDate: string;
      startDate: string;
      type: _36_Enums_BoostSaleType;
      status: boolean;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
      discount: PrismaJson_DiscountBoostSale;
    }>;
  } & {
    SEO: any;
    condition: PrismaJson_ConditionCollection;
    description: string;
    photos: PrismaJson_Photos;
    type: _36_Enums_CollectionType;
    status: _36_Enums_CollectionStatus;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
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
   * @returns any Ok
   * @throws ApiError
   */
  public getProductByConditions({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: operatorCondition,
  }): CancelablePromise<Array<{
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
  }>> {
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
