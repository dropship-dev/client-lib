/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariantComboService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllCombo({
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
    data: Array<{
      items: PrismaJson_VariantComboItems;
      minSellingPrice: number;
      compareAtPrice: number;
      productId: number;
      supplierCost: number;
      price: number;
      photo: string;
      isEnable: boolean;
      SKU: string;
      isActive: boolean;
      name: string;
      updatedAt: string;
      createdAt: string;
      isDeleted: boolean;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/combo',
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
  public getCombo({
    storeId,
    productId,
    id,
  }: {
    storeId: string,
    productId: number,
    id: number,
  }): CancelablePromise<{
    items: PrismaJson_VariantComboItems;
    minSellingPrice: number;
    compareAtPrice: number;
    productId: number;
    supplierCost: number;
    price: number;
    photo: string;
    isEnable: boolean;
    SKU: string;
    isActive: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/combo/{id}',
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
