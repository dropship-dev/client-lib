/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoostSale } from '../models/BoostSale';
import type { Collection } from '../models/Collection';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BoostSalesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

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

}
