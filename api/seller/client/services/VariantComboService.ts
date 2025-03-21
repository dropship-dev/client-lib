/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateComboDto } from '../models/CreateComboDto';
import type { Prisma_BatchPayload } from '../models/Prisma_BatchPayload';
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { UpdateComboDto } from '../models/UpdateComboDto';
import type { UpdateCombosDto } from '../models/UpdateCombosDto';
import type { UpdateComboStatusDto } from '../models/UpdateComboStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariantComboService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createCombo({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: CreateComboDto,
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
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/combo',
      path: {
        'storeId': storeId,
        'productId': productId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public updateCombos({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: UpdateCombosDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}/combo',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public deleteCombos({
    storeId,
    productId,
    ids,
  }: {
    storeId: string,
    productId: number,
    ids: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}/combo',
      path: {
        'storeId': storeId,
        'productId': productId,
      },
      query: {
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
   * @returns Prisma_BatchPayload Ok
   * @throws ApiError
   */
  public createCombos({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: Array<CreateComboDto>,
  }): CancelablePromise<Prisma_BatchPayload> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/combo/createCombos',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateCombo({
    storeId,
    productId,
    id,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    id: number,
    requestBody: UpdateComboDto,
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
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}/combo/{id}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
  public deleteCombo({
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
      method: 'DELETE',
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateComboStatus({
    storeId,
    productId,
    id,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    id: number,
    requestBody: UpdateComboStatusDto,
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
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/combo/{id}/status',
      path: {
        'storeId': storeId,
        'productId': productId,
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
