/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Photos } from '../models/Photos';
import type { VariantOptions } from '../models/VariantOptions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllProduct({
    storeId,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: number,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: (string | number | boolean | Photos | {
      Tag: Array<GetResult_any_any_any_>;
      variantOption: VariantOptions;
    });
    total: number;
    data: Array<({
      PlatformProduct: {
        Tag: Array<GetResult_any_any_any_>;
        variantOption: VariantOptions;
      };
    } & GetResult_any_any_any_)>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product',
      path: {
        'storeId': storeId,
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
  public getProduct({
    storeId,
    productId,
  }: {
    storeId: number,
    productId: number,
  }): CancelablePromise<({
    PlatformProduct: {
      Tag: Array<GetResult_any_any_any_>;
      variantOption: VariantOptions;
    };
  } & GetResult_any_any_any_)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}',
      path: {
        'storeId': storeId,
        'productId': productId,
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
