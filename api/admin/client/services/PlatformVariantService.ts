/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlatformVariantsDto } from '../models/CreatePlatformVariantsDto';
import type { Prisma_BatchPayload } from '../models/Prisma_BatchPayload';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdatePlatformVariantDto } from '../models/UpdatePlatformVariantDto';
import type { UpdatePlatformVariantsDto } from '../models/UpdatePlatformVariantsDto';
import type { UpdatePlatformVariantStatusDto } from '../models/UpdatePlatformVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlatformVariantService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns Prisma_BatchPayload Ok
   * @throws ApiError
   */
  public createPlatformVariants({
    fulfillmentAgencyId,
    platformProductId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    requestBody: CreatePlatformVariantsDto,
  }): CancelablePromise<Prisma_BatchPayload> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform-product/{platformProductId}/variant',
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
   * @returns string Ok
   * @throws ApiError
   */
  public updatePlatformVariants({
    fulfillmentAgencyId,
    platformProductId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    requestBody: UpdatePlatformVariantsDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/variant',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deletePlatformVariants({
    fulfillmentAgencyId,
    platformProductId,
    ids,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    ids: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/variant',
      path: {
        'platformProductId': platformProductId,
      },
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
   * @returns any Ok
   * @throws ApiError
   */
  public getPlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    id,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    id: number,
  }): CancelablePromise<{
    fulfillmentPlatformVariantId: string;
    groupPlatformVariantId: number;
    cost: PrismaJson_PlatformCostInfo;
    supplierPrice: number;
    price: number;
    photo: string;
    isEnable: boolean;
    isActive: boolean;
    variantOption: PrismaJson_VariantOptionValues;
    SKU: string;
    deleted: boolean;
    platformProductId: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}/variant/{id}',
      path: {
        'platformProductId': platformProductId,
        'id': id,
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
  public updatePlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    id: number,
    requestBody: UpdatePlatformVariantDto,
  }): CancelablePromise<{
    fulfillmentPlatformVariantId: string;
    groupPlatformVariantId: number;
    cost: PrismaJson_PlatformCostInfo;
    supplierPrice: number;
    price: number;
    photo: string;
    isEnable: boolean;
    isActive: boolean;
    variantOption: PrismaJson_VariantOptionValues;
    SKU: string;
    deleted: boolean;
    platformProductId: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/variant/{id}',
      path: {
        'platformProductId': platformProductId,
        'id': id,
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
  public deletePlatformVariant({
    fulfillmentAgencyId,
    platformProductId,
    id,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    id: number,
  }): CancelablePromise<{
    fulfillmentPlatformVariantId: string;
    groupPlatformVariantId: number;
    cost: PrismaJson_PlatformCostInfo;
    supplierPrice: number;
    price: number;
    photo: string;
    isEnable: boolean;
    isActive: boolean;
    variantOption: PrismaJson_VariantOptionValues;
    SKU: string;
    deleted: boolean;
    platformProductId: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/variant/{id}',
      path: {
        'platformProductId': platformProductId,
        'id': id,
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
  public updatePlatformVariantStatus({
    fulfillmentAgencyId,
    platformProductId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    platformProductId: number,
    id: number,
    requestBody: UpdatePlatformVariantStatusDto,
  }): CancelablePromise<{
    fulfillmentPlatformVariantId: string;
    groupPlatformVariantId: number;
    cost: PrismaJson_PlatformCostInfo;
    supplierPrice: number;
    price: number;
    photo: string;
    isEnable: boolean;
    isActive: boolean;
    variantOption: PrismaJson_VariantOptionValues;
    SKU: string;
    deleted: boolean;
    platformProductId: number;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/variant/{id}/status',
      path: {
        'platformProductId': platformProductId,
        'id': id,
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
}
