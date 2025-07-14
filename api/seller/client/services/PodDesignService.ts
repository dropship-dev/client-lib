/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FileType } from '../models/_36_Enums_FileType';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { DuplicateDesignDto } from '../models/DuplicateDesignDto';
import type { GetBatchResult } from '../models/GetBatchResult';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_CustomVariantOptions } from '../models/PrismaJson_CustomVariantOptions';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PodFileGroupLayers } from '../models/PrismaJson_PodFileGroupLayers';
import type { PrismaJson_PodFileProperties } from '../models/PrismaJson_PodFileProperties';
import type { PrismaJson_PrintAreaBounds } from '../models/PrismaJson_PrintAreaBounds';
import type { PrismaJson_PrintAreaPhotos } from '../models/PrismaJson_PrintAreaPhotos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { PublishToProductDto } from '../models/PublishToProductDto';
import type { UpdateDesignDto } from '../models/UpdateDesignDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PodDesignService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createNewDesign({
    requestBody,
  }: {
    requestBody: CreateDesignDto,
  }): CancelablePromise<{
    isDraft: boolean;
    sku: string;
    sizeGuide: string;
    keyFeature: string;
    podTemplateId: number;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/design',
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
  public getAllDesign({
    storeId,
    limit = 10,
    name,
    printArea,
    nextPageIndex,
  }: {
    storeId: string,
    limit?: number,
    name?: string,
    printArea?: Array<string>,
    nextPageIndex?: number,
  }): CancelablePromise<({
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      url: string;
      printArea: Array<string>;
      isDraft: boolean;
      isActive: boolean;
      variantOption: Array<{
        total: number;
        name: string;
      }>;
      sizeGuide: string;
      description: string;
      name: string;
      storeId: string;
      podTemplateId: number;
      id: number;
    }>;
  } | boolean)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/design',
      query: {
        'storeId': storeId,
        'limit': limit,
        'name': name,
        'printArea': printArea,
        'nextPageIndex': nextPageIndex,
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
   * @returns GetBatchResult Ok
   * @throws ApiError
   */
  public deleteMyDesign({
    requestBody,
  }: {
    requestBody: Array<number>,
  }): CancelablePromise<GetBatchResult> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/pod/design',
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
  public duplicateDesign({
    requestBody,
  }: {
    requestBody: DuplicateDesignDto,
  }): CancelablePromise<{
    printArea: Array<any>;
    url: string;
    variantOption: Array<{
      total: number;
      name: string;
    }>;
    isDraft: boolean;
    isActive: boolean;
    sizeGuide: string;
    description: string;
    name: string;
    storeId: string;
    podTemplateId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/design/duplicate',
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
  public publishToProduct({
    requestBody,
  }: {
    requestBody: PublishToProductDto,
  }): CancelablePromise<{
    snapshotAt: string;
    podTemplateId: number;
    campaignId: string;
    isEnable: boolean;
    supplierContact: string;
    customVariantOption: PrismaJson_CustomVariantOptions;
    variantOption: PrismaJson_VariantOptions;
    availableSet: PrismaJson_AvailableSet;
    SKU: string;
    details: string;
    permalink: string;
    platformProductId: number;
    deleted: boolean;
    photos: PrismaJson_Photos;
    description: string;
    isActive: boolean;
    shippingFeeAdditional: number;
    shippingFee: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/design/publish-to-store',
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
  public multiplePublishToProduct({
    requestBody,
  }: {
    requestBody: MultiplePublishToStoreDto,
  }): CancelablePromise<{
    message: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/design/multiple-publish-to-store',
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
  public detailMyDesign({
    id,
  }: {
    id: number,
  }): CancelablePromise<{
    technique: {
      name: string;
      id: number;
    };
    templateVariant: Array<{
      faPrice: number;
      minSellingPrice: number;
      supplierCost: number;
      sku: string;
      podTemplateId: number;
      variantOption: PrismaJson_VariantOptionValues;
      name: string;
      id: number;
      isSelected: boolean;
    }>;
    designVariant: Array<{
      sku: string;
      podTemplateVariantId: number;
      price: number;
      minSellingPrice: number;
      isDisable: boolean;
      isActive: boolean;
      comparePrice: number;
      variantOption: PrismaJson_VariantOptionValues;
      name: string;
      id: number;
    }>;
    myDesign: {
      isDraft: boolean;
      sku: string;
      sizeGuide: string;
      keyFeature: string;
      podTemplateId: number;
      supplierContact: string;
      variantOption: PrismaJson_VariantOptions;
      description: string;
      name: string;
      storeId: string;
      id: number;
      PodFile: Array<{
        properties: PrismaJson_PodFileProperties;
        podPrintAreaId: number;
        groupLayers: PrismaJson_PodFileGroupLayers;
        fileName: string;
        type: _36_Enums_FileType;
        id: number;
      }>;
    };
    printArea: Array<{
      printAreaBounds: PrismaJson_PrintAreaBounds;
      faPrice: number;
      supplierCost: number;
      photos: PrismaJson_PrintAreaPhotos;
      name: string;
      id: number;
      PodFile: {
        properties: PrismaJson_PodFileProperties;
        podPrintAreaId: number;
        groupLayers: PrismaJson_PodFileGroupLayers;
        size: string;
        backgroundUrl: string;
        url: string;
        fileName: string;
        podDesignId: number;
        podTemplateId: number;
        type: _36_Enums_FileType;
        updatedAt: string;
        createdAt: string;
        id: number;
      };
    }>;
    templateInformation: {
      blank: {
        maxPrice: number;
        minPrice: number;
      };
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/design/{id}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateMyDesign({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateDesignDto,
  }): CancelablePromise<{
    isDraft: boolean;
    sku: string;
    sizeGuide: string;
    keyFeature: string;
    podTemplateId: number;
    supplierContact: string;
    variantOption: PrismaJson_VariantOptions;
    description: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/pod/design/{id}',
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
   * @returns string Ok
   * @throws ApiError
   */
  public getPrintAreaByStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/design/{storeId}/print-area',
      path: {
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
}
