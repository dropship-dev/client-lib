/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FavoriteTemplateDto } from '../models/FavoriteTemplateDto';
import type { FileProperties } from '../models/FileProperties';
import type { FileType } from '../models/FileType';
import type { IPageDetail } from '../models/IPageDetail';
import type { PodTemplateFavorite } from '../models/PodTemplateFavorite';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllTemplate({
    search,
    sort = 'ASC',
    status,
    podProductTypeId,
    storeId,
    fulfillmentAgencyId,
    isFavorite,
    page = 1,
    limit = 10,
  }: {
    search?: string,
    sort?: 'ASC' | 'DESC',
    status?: boolean,
    podProductTypeId?: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
    isFavorite?: boolean,
    page?: number,
    limit?: number,
  }): CancelablePromise<({
    data?: any;
    template: Array<any>;
    pageDetail: IPageDetail;
  } | {
    template?: any;
    data: Array<{
      variantOption: Array<{
        total: any;
        name: string;
      }>;
      isActive: boolean;
      file: string;
      minSellingPrice: number;
      description: string;
      podTechniqueId: number;
      podProductTypeId: number;
      name: string;
      id: number;
    }>;
    pageDetail: IPageDetail;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/template',
      query: {
        'search': search,
        'sort': sort,
        'status': status,
        'podProductTypeId': podProductTypeId,
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
  public getDetailTemplate({
    id,
  }: {
    id: number,
  }): CancelablePromise<{
    isStock: boolean;
    sku: string;
    sizeGuide: string;
    keyFeature: string;
    podTechniqueId: number;
    podProductTypeId: number;
    podCategoryId: number;
    isActive: boolean;
    supplierContact: string;
    variantOption: VariantOptions;
    description: string;
    name: string;
    PodFile: Array<{
      podPrintAreaId: number;
      properties: FileProperties;
      file: string;
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
      variantOption: VariantOptionValues;
      name: string;
      id: number;
    }>;
    PodPrintArea: Array<{
      faPrice: number;
      supplierCost: number;
      name: string;
      id: number;
    }>;
    id: number;
    File: {
      fileMockup: Array<{
        podPrintAreaId: number;
        properties: FileProperties;
        file: string;
        podDesignId: number;
        podTemplateId: number;
        type: FileType;
        id: number;
      }>;
      fileTemplate: any;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/template/{id}',
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
   * @returns PodTemplateFavorite Ok
   * @throws ApiError
   */
  public favoriteTemplate({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: FavoriteTemplateDto,
  }): CancelablePromise<PodTemplateFavorite> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pod/template/{id}/favorite',
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

}
