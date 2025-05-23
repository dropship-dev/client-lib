/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_CustomVariantOptionValues } from '../models/PrismaJson_CustomVariantOptionValues';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariantService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllVariant({
    storeId,
    productId,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: string,
    productId: number,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<({
      PlatformVariant: {
        price: number;
        variantOption: PrismaJson_VariantOptionValues;
      };
    } & {
      podDesignVariantId: number;
      platformVariantId: number;
      margin: PrismaJson_MarginInfo;
      minSellingPrice: number;
      compareAtPrice: number;
      displayName: string;
      productId: number;
      cost: PrismaJson_CostInfo;
      supplierPrice: number;
      price: number;
      photo: string;
      isEnable: boolean;
      customVariantOption: PrismaJson_CustomVariantOptionValues;
      variantOption: PrismaJson_VariantOptionValues;
      SKU: string;
      deleted: boolean;
      isActive: boolean;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/variant',
      path: {
        'storeId': storeId,
        'productId': productId,
      },
      query: {
        'pageSize': pageSize,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getVariant({
    storeId,
    productId,
    id,
  }: {
    storeId: string,
    productId: number,
    id: number,
  }): CancelablePromise<({
    PlatformVariant: {
      price: number;
      variantOption: PrismaJson_VariantOptionValues;
    };
  } & {
    podDesignVariantId: number;
    platformVariantId: number;
    margin: PrismaJson_MarginInfo;
    minSellingPrice: number;
    compareAtPrice: number;
    displayName: string;
    productId: number;
    cost: PrismaJson_CostInfo;
    supplierPrice: number;
    price: number;
    photo: string;
    isEnable: boolean;
    customVariantOption: PrismaJson_CustomVariantOptionValues;
    variantOption: PrismaJson_VariantOptionValues;
    SKU: string;
    deleted: boolean;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/variant/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
