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
import type { PlacementBoostSaleEnum } from '../models/PlacementBoostSaleEnum';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BoostSalesService {

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
      url: '/store/{storeId}/boost-sales',
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
    crossSellType,
    crossSellStatus,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
    startDate?: string,
    endDate?: string,
    search?: string,
    crossSellType?: Array<BoostSaleType>,
    crossSellStatus?: boolean,
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
      url: '/store/{storeId}/boost-sales',
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
    placement,
  }: {
    storeId: string,
    placement: PlacementBoostSaleEnum,
  }): CancelablePromise<{
    id: number;
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/boost-sales/random/placement/{placement}',
      path: {
        'storeId': storeId,
        'placement': placement,
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
  public getBoostSaleByPermalinkSideStore({
    storeId,
    permalink,
  }: {
    storeId: string,
    permalink: string,
  }): CancelablePromise<{
    BoostSale: Array<(BoostSale & {
      Product: Array<(Product & {
        ProductVariant: Array<(ProductVariant & {
          Product: {
            name: string;
            id: number;
          };
        })>;
      })>;
      Collection: Array<{
        Product: Array<(Product & {
          ProductVariant: Array<(ProductVariant & {
            Product: {
              name: string;
              id: number;
            };
          })>;
        })>;
      }>;
    })>;
    Collection: Array<(Collection & {
      BoostSale: Array<(BoostSale & {
        Product: Array<(Product & {
          ProductVariant: Array<(ProductVariant & {
            Product: {
              name: string;
              id: number;
            };
          })>;
        })>;
        Collection: Array<{
          Product: Array<(Product & {
            ProductVariant: Array<(ProductVariant & {
              Product: {
                name: string;
                id: number;
              };
            })>;
          })>;
        }>;
      })>;
    })>;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/boost-sales/get-boost-sale-permalink-side-store',
      path: {
        'storeId': storeId,
      },
      query: {
        'permalink': permalink,
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
  public getBoostSales({
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
      url: '/store/{storeId}/boost-sales/{id}',
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
  public updateBoostSales({
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
      url: '/store/{storeId}/boost-sales/{id}',
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
  public deleteBoostSales({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<BoostSale> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/boost-sales/{id}',
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
  public updateStatusesBoostSales({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateCrossSellStatusDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/boost-sales/{id}/status',
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
  public deleteManyBoostSales({
    id,
    storeId,
  }: {
    id: Array<number>,
    storeId: string,
  }): CancelablePromise<BatchPayload> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/boost-sales/delete-many-boost-sales',
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
