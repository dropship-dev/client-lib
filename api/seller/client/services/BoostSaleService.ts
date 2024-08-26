/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { BoostSale } from '../models/BoostSale';
import type { BoostSaleDto } from '../models/BoostSaleDto';
import type { BoostSaleType } from '../models/BoostSaleType';
import type { Collection } from '../models/Collection';
import type { Photos } from '../models/Photos';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateBoostSaleStatusDto } from '../models/UpdateBoostSaleStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BoostSaleService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns BoostSale Ok
   * @throws ApiError
   */
  public createBoostSale({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: BoostSaleDto,
  }): CancelablePromise<BoostSale> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/cross-sell',
      path: {
        'storeId': storeId,
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
  public getAllBoostSale({
    storeId,
    pageSize = 20,
    nextPageIndex,
    startDate,
    endDate,
    search,
    boostSaleType,
    boostSaleStatus,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
    startDate?: string,
    endDate?: string,
    search?: string,
    boostSaleType?: Array<BoostSaleType>,
    boostSaleStatus?: boolean,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(BoostSale & {
      Product: Array<Product>;
      Collection: Array<(Collection & {
        Product: Array<Product>;
      })>;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/cross-sell',
      path: {
        'storeId': storeId,
      },
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'startDate': startDate,
        'endDate': endDate,
        'search': search,
        'BoostSaleType': boostSaleType,
        'BoostSaleStatus': boostSaleStatus,
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
  public getBoostSale({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<(BoostSale & {
    rootProduct: (Product & {
      ProductVariant: Array<ProductVariant>;
    });
    Product: Array<{
      isEnable: boolean;
      isActive: boolean;
      photos: Photos;
      name: string;
      ProductVariant: Array<{
        compareAtPrice: number;
        price: number;
      }>;
      id: number;
    }>;
    Collection: Array<(Collection & {
      Product: Array<{
        isEnable: boolean;
        isActive: boolean;
        photos: Photos;
        name: string;
        ProductVariant: Array<{
          compareAtPrice: number;
          price: number;
        }>;
        id: number;
      }>;
    })>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/cross-sell/{id}',
      path: {
        'id': id,
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

  /**
   * @returns string Ok
   * @throws ApiError
   */
  public updateBoostSale({
    id,
    storeId,
    requestBody,
  }: {
    id: number,
    storeId: string,
    requestBody: BoostSaleDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/cross-sell/{id}',
      path: {
        'id': id,
        'storeId': storeId,
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
   * @returns BoostSale Ok
   * @throws ApiError
   */
  public deleteBoostSale({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<BoostSale> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/cross-sell/{id}',
      path: {
        'id': id,
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

  /**
   * @returns void
   * @throws ApiError
   */
  public updateStatusesBoostSale({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateBoostSaleStatusDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/cross-sell/{id}/status',
      path: {
        'storeId': storeId,
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
   * @returns BatchPayload Ok
   * @throws ApiError
   */
  public deleteManyBoostSale({
    id,
    storeId,
  }: {
    id: Array<number>,
    storeId: string,
  }): CancelablePromise<BatchPayload> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/cross-sell/delete-many-cross-sells',
      path: {
        'storeId': storeId,
      },
      query: {
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
