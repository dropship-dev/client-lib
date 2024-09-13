/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTemplatePodDto } from '../models/CreateTemplatePodDto';
import type { FileType } from '../models/FileType';
import type { GetAllTemplateResponse } from '../models/GetAllTemplateResponse';
import type { IPageDetail } from '../models/IPageDetail';
import type { PodFileColors } from '../models/PodFileColors';
import type { PodFileGroupLayers } from '../models/PodFileGroupLayers';
import type { PodFileProperties } from '../models/PodFileProperties';
import type { PodMeshPoints } from '../models/PodMeshPoints';
import type { PodTemplate } from '../models/PodTemplate';
import type { PrintAreaBounds } from '../models/PrintAreaBounds';
import type { StatusTemplate } from '../models/StatusTemplate';
import type { UpdatePodTemplateDto } from '../models/UpdatePodTemplateDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns PodTemplate Ok
   * @throws ApiError
   */
  public createTemplate({
    requestBody,
  }: {
    requestBody: CreateTemplatePodDto,
  }): CancelablePromise<PodTemplate> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/template',
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
  public getAllTemplate({
    search,
    sort = 'ASC',
    status,
    podProductTypeId,
    ignorePodTemplateId,
    podCategoryId,
    storeId,
    fulfillmentAgencyId,
    isFavorite,
    page = 1,
    limit = 10,
  }: {
    search?: string,
    sort?: 'ASC' | 'DESC',
    status?: Array<StatusTemplate>,
    podProductTypeId?: number,
    ignorePodTemplateId?: number,
    podCategoryId?: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
    isFavorite?: boolean,
    page?: number,
    limit?: number,
  }): CancelablePromise<{
    data: Array<GetAllTemplateResponse>;
    pageDetail: IPageDetail;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/template',
      query: {
        'search': search,
        'sort': sort,
        'status': status,
        'podProductTypeId': podProductTypeId,
        'ignorePodTemplateId': ignorePodTemplateId,
        'podCategoryId': podCategoryId,
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'isFavorite': isFavorite,
        'page': page,
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
  public updateTemplate({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdatePodTemplateDto,
  }): CancelablePromise<(PodTemplate | boolean)> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/pod/template/{id}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public getDetailTemplate({
    id,
    selectAllVariant,
  }: {
    id: number,
    selectAllVariant?: boolean,
  }): CancelablePromise<{
    isStock: boolean;
    sku: string;
    sizeGuide: string;
    keyFeature: string;
    podTechniqueId: number;
    podProductTypeId: number;
    isActive: boolean;
    supplierContact: string;
    variantOption: VariantOptions;
    description: string;
    podCategoryId: number;
    name: string;
    PodFile: Array<{
      podPrintAreaId: number;
      properties: PodFileProperties;
      color: PodFileColors;
      groupLayers: PodFileGroupLayers;
      fileName: string;
      podDesignId: number;
      podTemplateId: number;
      type: FileType;
      id: number;
    }>;
    PodTemplateVariant: Array<{
      faPrice: number;
      minSellingPrice: number;
      supplierCost: number;
      sku: string;
      podTemplateId: number;
      isEnable: boolean;
      isActive: boolean;
      variantOption: VariantOptionValues;
      name: string;
      id: number;
    }>;
    PodPrintArea: Array<{
      printAreaBounds: PrintAreaBounds;
      meshPoints: PodMeshPoints;
      groupLayers: PodFileGroupLayers;
      photo: string;
      faPrice: number;
      supplierCost: number;
      name: string;
      id: number;
    }>;
    PodTechnique: {
      name: string;
      id: number;
    };
    id: number;
    url: string;
    isFavorite: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/template/{id}',
      path: {
        'id': id,
      },
      query: {
        'selectAllVariant': selectAllVariant,
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
  public getTemplateVariant({
    id,
    podVariantIds,
    podDesignId,
  }: {
    id: number,
    podVariantIds: Array<number>,
    podDesignId?: number,
  }): CancelablePromise<Array<{
    designVariantId: number;
    comparePrice: number;
    price: number;
    isActive: boolean;
    minSellingPrice: number;
    isEnable: boolean;
    name: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/template/{id}/template-variant',
      path: {
        'id': id,
      },
      query: {
        'podVariantIds': podVariantIds,
        'podDesignId': podDesignId,
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
   * @returns boolean Ok
   * @throws ApiError
   */
  public downloadTemplate({
    id,
  }: {
    id: number,
  }): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/template/{id}/download',
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

}
