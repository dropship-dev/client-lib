/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { DuplicateDesignDto } from '../models/DuplicateDesignDto';
import type { FileType } from '../models/FileType';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { PodDesign } from '../models/PodDesign';
import type { PodFile } from '../models/PodFile';
import type { PodFileColors } from '../models/PodFileColors';
import type { PodFileGroupLayers } from '../models/PodFileGroupLayers';
import type { PodFileProperties } from '../models/PodFileProperties';
import type { PodMeshPoints } from '../models/PodMeshPoints';
import type { PrintAreaBounds } from '../models/PrintAreaBounds';
import type { Product } from '../models/Product';
import type { PublishToProductDto } from '../models/PublishToProductDto';
import type { UpdateDesignDto } from '../models/UpdateDesignDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodDesignService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns PodDesign Ok
   * @throws ApiError
   */
  public createNewDesign({
    requestBody,
  }: {
    requestBody: CreateDesignDto,
  }): CancelablePromise<PodDesign> {
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
   * @returns BatchPayload Ok
   * @throws ApiError
   */
  public deleteMyDesign({
    requestBody,
  }: {
    requestBody: Array<number>,
  }): CancelablePromise<BatchPayload> {
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
   * @returns Product Ok
   * @throws ApiError
   */
  public publishToProduct({
    requestBody,
  }: {
    requestBody: PublishToProductDto,
  }): CancelablePromise<Product> {
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
      variantOption: VariantOptionValues;
      name: string;
      id: number;
      isSelected: boolean;
    }>;
    designVariant: Array<{
      sku: string;
      templateVariantId: number;
      price: number;
      minSellingPrice: number;
      isDisable: boolean;
      isActive: boolean;
      comparePrice: number;
      variantOption: VariantOptionValues;
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
      variantOption: VariantOptions;
      description: string;
      name: string;
      PodFile: Array<{
        podPrintAreaId: number;
        properties: PodFileProperties;
        color: PodFileColors;
        groupLayers: PodFileGroupLayers;
        fileName: string;
        type: FileType;
        id: number;
      }>;
      id: number;
      storeId: string;
    };
    printArea: Array<{
      printAreaBounds: PrintAreaBounds;
      meshPoints: PodMeshPoints;
      groupLayers: PodFileGroupLayers;
      photo: string;
      faPrice: number;
      supplierCost: number;
      name: string;
      id: number;
      PodFile: PodFile;
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
   * @returns PodDesign Ok
   * @throws ApiError
   */
  public updateMyDesign({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateDesignDto,
  }): CancelablePromise<PodDesign> {
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
