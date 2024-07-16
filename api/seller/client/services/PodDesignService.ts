/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { IPageDetail } from '../models/IPageDetail';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { PodDesign } from '../models/PodDesign';
import type { PodFile } from '../models/PodFile';
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
    page = 1,
    limit = 10,
    name,
    printArea,
  }: {
    storeId: string,
    page?: number,
    limit?: number,
    name?: string,
    printArea?: string,
  }): CancelablePromise<({
    data: Array<{
      printArea: Array<string>;
      isDraft: boolean;
      isActive: boolean;
      variantOption: VariantOptions;
      sizeGuide: string;
      description: string;
      name: string;
      storeId: string;
      podTemplateId: number;
      id: number;
    }>;
    pageDetail: IPageDetail;
  } | boolean)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pod/design',
      query: {
        'storeId': storeId,
        'page': page,
        'limit': limit,
        'name': name,
        'printArea': printArea,
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
    designVariant: Array<{
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
      supplierContract: string;
      sku: string;
      sizeGuide: string;
      podTemplateId: number;
      description: string;
      name: string;
      PodFile: Array<PodFile>;
      id: number;
      storeId: string;
    };
    printArea: Array<{
      faPrice: number;
      supplierCost: number;
      name: string;
      PodFile: Array<PodFile>;
      id: number;
      File: PodFile;
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
