/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { Collection } from '../models/Collection';
import type { CrossSell } from '../models/CrossSell';
import type { CrossSellDto } from '../models/CrossSellDto';
import type { CrossSellType } from '../models/CrossSellType';
import type { Photos } from '../models/Photos';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CrossSellService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns CrossSell Ok
   * @throws ApiError
   */
  public createCrossSell({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CrossSellDto,
  }): CancelablePromise<CrossSell> {
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
  public getAllCrossSell({
    storeId,
    pageSize = 20,
    nextPageIndex,
    startDate,
    endDate,
    search,
    crossSellType,
    crossSellStatus,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
    startDate?: string,
    endDate?: string,
    search?: string,
    crossSellType?: Array<CrossSellType>,
    crossSellStatus?: boolean,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(CrossSell & {
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
        'crossSellType': crossSellType,
        'crossSellStatus': crossSellStatus,
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
  public getRandomCrossSell({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    Product: Array<{
      photos: Photos;
      name: string;
      ProductVariant: Array<{
        compareAtPrice: number;
        price: number;
        isEnable: boolean;
        isActive: boolean;
      }>;
    }>;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/cross-sell/random',
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getCrossSell({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<(CrossSell & {
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
  public updateCrossSell({
    id,
    storeId,
    requestBody,
  }: {
    id: number,
    storeId: string,
    requestBody: CrossSellDto,
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
   * @returns CrossSell Ok
   * @throws ApiError
   */
  public deleteCrossSell({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<CrossSell> {
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
  public updateStatusesCrossSell({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateCrossSellStatusDto,
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
  public deleteManyCrossSell({
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
