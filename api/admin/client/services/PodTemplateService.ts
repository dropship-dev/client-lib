/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { FileProperties } from '../models/FileProperties';
import type { FileType } from '../models/FileType';
import type { IPageDetail } from '../models/IPageDetail';
import type { Template } from '../models/Template';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PodTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Template Ok
   * @throws ApiError
   */
  public createTemplate({
    requestBody,
  }: {
    requestBody: CreateTemplateDto,
  }): CancelablePromise<Template> {
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
    productTypeId,
    storeId,
    fulfillmentAgencyId,
    isFavorite,
    page = 1,
    limit = 10,
  }: {
    search?: string,
    sort?: 'ASC' | 'DESC',
    status?: boolean,
    productTypeId?: number,
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
      techniqueId: number;
      productTypeId: number;
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
        'productTypeId': productTypeId,
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
    requestBody: UpdateTemplateDto,
  }): CancelablePromise<(Template | boolean)> {
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
  }: {
    id: number,
  }): CancelablePromise<{
    isStock: boolean;
    sku: string;
    sizeGuide: string;
    keyFeature: string;
    techniqueId: number;
    productTypeId: number;
    categoryId: number;
    isActive: boolean;
    supplierContact: string;
    variantOption: VariantOptions;
    description: string;
    name: string;
    TemplateVariant: Array<{
      faPrice: number;
      minSellingPrice: number;
      supplierCost: number;
      sku: string;
      templateId: number;
      variantOption: VariantOptionValues;
      name: string;
      id: number;
    }>;
    PrintArea: Array<{
      faPrice: number;
      supplierCost: number;
      name: string;
      id: number;
    }>;
    id: number;
    File: {
      fileMockup: Array<{
        printAreaId: number;
        properties: FileProperties;
        designId: number;
        templateId: number;
        file: string;
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
    variantIds,
    designId,
  }: {
    id: number,
    variantIds: Array<number>,
    designId?: number,
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
        'variantIds': variantIds,
        'designId': designId,
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
