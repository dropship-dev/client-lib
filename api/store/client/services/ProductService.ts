/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTag } from '../models/AdminTag';
import type { AvailableSet } from '../models/AvailableSet';
import type { Campaign } from '../models/Campaign';
import type { CrossSell } from '../models/CrossSell';
import type { Discount } from '../models/Discount';
import type { getStatusCombosType } from '../models/getStatusCombosType';
import type { getVariantsType } from '../models/getVariantsType';
import type { Photos } from '../models/Photos';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { Review } from '../models/Review';
import type { Tag } from '../models/Tag';
import type { VariantCombo } from '../models/VariantCombo';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public countProduct({
    storeId,
    isActive,
  }: {
    storeId: string,
    isActive?: boolean,
  }): CancelablePromise<{
    count: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/count',
      path: {
        'storeId': storeId,
      },
      query: {
        'isActive': isActive,
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
  public getAllProduct({
    storeId,
    pageSize = 20,
    nextPageIndex,
    name,
    tags,
    isActive,
    startPrice,
    endPrice,
    isCheckRootProductCrossSell,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
    name?: string,
    tags?: Array<string>,
    isActive?: boolean,
    startPrice?: number,
    endPrice?: number,
    isCheckRootProductCrossSell?: boolean,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(Product & {
      Campaign: Campaign;
      VariantCombo: Array<VariantCombo>;
      ProductVariant: Array<(ProductVariant & {
        PlatformVariant: {
          price: number;
          photo: string;
          platformProductId: number;
          isEnable: boolean;
          isActive: boolean;
          variantOption: VariantOptionValues;
          name: string;
          updatedAt: string;
          createdAt: string;
          id: number;
        };
      })>;
      Tag: Array<Tag>;
      PlatformProduct: {
        variantOption: VariantOptions;
        Tag: Array<AdminTag>;
      };
    })>;
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
        'name': name,
        'tags': tags,
        'isActive': isActive,
        'startPrice': startPrice,
        'endPrice': endPrice,
        'isCheckRootProductCrossSell': isCheckRootProductCrossSell,
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
  public getProductByPermalink({
    storeId,
    permalink,
    productId,
  }: {
    storeId: string,
    permalink?: string,
    productId?: number,
  }): CancelablePromise<{
    Campaign: (Campaign & {
      listDiscount: Array<Discount>;
    });
    VariantCombo: Array<(VariantCombo & {
      Product: {
        platformProductId: number;
        name: string;
      };
    })>;
    ProductVariant: Array<(ProductVariant & {
      Product: {
        platformProductId: number;
        name: string;
      };
      PlatformVariant: PlatformVariant;
    })>;
    Review: Array<Review>;
    GoogleAnalytic: Array<{
      measurementId: string;
    }>;
    TiktokPixel: Array<{
      pixelId: string;
    }>;
    FbPixel: Array<{
      pixelId: string;
    }>;
    Tag: Array<Tag>;
    PlatformProduct: {
      variantOption: VariantOptions;
      id: number;
    };
    CrossSell: Array<(CrossSell & {
      Product: Array<(Product & {
        ProductVariant: Array<(ProductVariant & {
          Product: {
            name: string;
          };
        })>;
      })>;
      Collection: Array<{
        Product: Array<(Product & {
          ProductVariant: Array<(ProductVariant & {
            Product: {
              name: string;
            };
          })>;
        })>;
      }>;
    })>;
    updatedAt: string;
    createdAt: string;
    podTemplateId: number;
    campaignId: string;
    storeId: string;
    platformProductId: number;
    deleted: boolean;
    isEnable: boolean;
    isActive: boolean;
    supplierContact: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    variantOption: VariantOptions;
    availableSet: AvailableSet;
    SKU: string;
    photos: Photos;
    details: string;
    description: string;
    permalink: string;
    name: string;
    id: number;
    Collection: any;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/permalink',
      path: {
        'storeId': storeId,
      },
      query: {
        'permalink': permalink,
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStatusOrderItems({
    storeId,
    variantIds,
    comboIds,
  }: {
    storeId: string,
    variantIds?: Array<number>,
    comboIds?: Array<number>,
  }): CancelablePromise<Array<(getVariantsType | getStatusCombosType)>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/getStatusOrderItems',
      path: {
        'storeId': storeId,
      },
      query: {
        'variantIds': variantIds,
        'comboIds': comboIds,
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
    isGetAllPlatformProductStore,
  }: {
    storeId: string,
    productId: number,
    isGetAllPlatformProductStore?: boolean,
  }): CancelablePromise<(Product & {
    Campaign: (Campaign & {
      listDiscount: Array<Discount>;
    });
    VariantCombo: Array<VariantCombo>;
    ProductVariant: Array<(ProductVariant & {
      PlatformVariant: {
        cost: PlatformCostInfo;
        price: number;
        id: number;
      };
    })>;
    Tag: Array<Tag>;
    PlatformProduct: {
      variantOption: VariantOptions;
      Tag: Array<AdminTag>;
    };
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}',
      path: {
        'storeId': storeId,
        'productId': productId,
      },
      query: {
        'isGetAllPlatformProductStore': isGetAllPlatformProductStore,
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
