/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { BoostSaleDto } from '../models/BoostSaleDto';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_CustomVariantOptions } from '../models/PrismaJson_CustomVariantOptions';
import type { PrismaJson_CustomVariantOptionValues } from '../models/PrismaJson_CustomVariantOptionValues';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BoostSalesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createBoostSale({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: BoostSaleDto,
  }): CancelablePromise<{
    rootProductId: number;
    triggerBy: _36_Enums_BoostSaleTriggerType;
    marketingType: _36_Enums_MarketingType;
    placement: PrismaJson_PlacementBoostSaleType;
    endDate: string;
    startDate: string;
    type: _36_Enums_BoostSaleType;
    status: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    discount: PrismaJson_DiscountBoostSale;
  }> {
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
    crossSellType?: Array<_36_Enums_BoostSaleType>,
    crossSellStatus?: boolean,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      rootProductId: number;
      triggerBy: _36_Enums_BoostSaleTriggerType;
      marketingType: _36_Enums_MarketingType;
      placement: PrismaJson_PlacementBoostSaleType;
      endDate: string;
      startDate: string;
      type: _36_Enums_BoostSaleType;
      status: boolean;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
      discount: PrismaJson_DiscountBoostSale;
    }>;
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
  public getBoostSaleByPermalinkSideStore({
    storeId,
    permalink,
  }: {
    storeId: string,
    permalink: string,
  }): CancelablePromise<{
    id: number;
    BoostSale: Array<({
      Product: Array<{
        permalink: string;
        photos: PrismaJson_Photos;
        isActive: boolean;
        name: string;
        id: number;
        ProductVariant: Array<({
          Product: {
            name: string;
            id: number;
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
      }>;
      Collection: Array<{
        Product: Array<{
          permalink: string;
          photos: PrismaJson_Photos;
          isActive: boolean;
          name: string;
          id: number;
          ProductVariant: Array<({
            Product: {
              name: string;
              id: number;
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
        }>;
      }>;
    } & {
      rootProductId: number;
      triggerBy: _36_Enums_BoostSaleTriggerType;
      marketingType: _36_Enums_MarketingType;
      placement: PrismaJson_PlacementBoostSaleType;
      endDate: string;
      startDate: string;
      type: _36_Enums_BoostSaleType;
      status: boolean;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
      discount: PrismaJson_DiscountBoostSale;
    })>;
    Collection: Array<({
      BoostSale: Array<({
        Product: Array<{
          permalink: string;
          photos: PrismaJson_Photos;
          isActive: boolean;
          name: string;
          id: number;
          ProductVariant: Array<({
            Product: {
              name: string;
              id: number;
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
        }>;
        Collection: Array<{
          Product: Array<{
            permalink: string;
            photos: PrismaJson_Photos;
            isActive: boolean;
            name: string;
            id: number;
            ProductVariant: Array<({
              Product: {
                name: string;
                id: number;
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
          }>;
        }>;
      } & {
        rootProductId: number;
        triggerBy: _36_Enums_BoostSaleTriggerType;
        marketingType: _36_Enums_MarketingType;
        placement: PrismaJson_PlacementBoostSaleType;
        endDate: string;
        startDate: string;
        type: _36_Enums_BoostSaleType;
        status: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        discount: PrismaJson_DiscountBoostSale;
      })>;
    } & {
      SEO: any;
      condition: PrismaJson_ConditionCollection;
      photos: PrismaJson_Photos;
      description: string;
      type: _36_Enums_CollectionType;
      status: _36_Enums_CollectionStatus;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    })>;
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
  public searchCollectionsForUpsell({
    storeId,
    name,
    boostSaleId,
    nextPageIndex,
    pageSize = 20,
  }: {
    storeId: string,
    name?: string,
    boostSaleId?: number,
    nextPageIndex?: number,
    pageSize?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      photos: PrismaJson_Photos;
      name: string;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/boost-sales/search-collections-for-upsell',
      path: {
        'storeId': storeId,
      },
      query: {
        'name': name,
        'boostSaleId': boostSaleId,
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
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
  public searchProductsForUpsell({
    storeId,
    name,
    boostSaleId,
    nextPageIndex,
    pageSize = 20,
  }: {
    storeId: string,
    name?: string,
    boostSaleId?: number,
    nextPageIndex?: number,
    pageSize?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      photos: PrismaJson_Photos;
      name: string;
      id: number;
      ProductVariant: Array<{
        price: number;
        name: string;
        id: number;
      }>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/boost-sales/search-products-for-upsell',
      path: {
        'storeId': storeId,
      },
      query: {
        'name': name,
        'boostSaleId': boostSaleId,
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
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
  }): CancelablePromise<({
    rootProduct: ({
      ProductVariant: Array<{
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
      }>;
    } & {
      snapshotAt: string;
      podTemplateId: number;
      campaignId: string;
      isEnable: boolean;
      supplierContact: string;
      customVariantOption: PrismaJson_CustomVariantOptions;
      variantOption: PrismaJson_VariantOptions;
      availableSet: PrismaJson_AvailableSet;
      SKU: string;
      details: string;
      permalink: string;
      platformProductId: number;
      deleted: boolean;
      photos: PrismaJson_Photos;
      description: string;
      isActive: boolean;
      shippingFeeAdditional: number;
      shippingFee: number;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    });
    Product: Array<{
      isEnable: boolean;
      photos: PrismaJson_Photos;
      isActive: boolean;
      name: string;
      id: number;
      ProductVariant: Array<{
        compareAtPrice: number;
        price: number;
      }>;
    }>;
    Collection: Array<({
      Product: Array<{
        isEnable: boolean;
        photos: PrismaJson_Photos;
        isActive: boolean;
        name: string;
        id: number;
        ProductVariant: Array<{
          compareAtPrice: number;
          price: number;
        }>;
      }>;
    } & {
      SEO: any;
      condition: PrismaJson_ConditionCollection;
      photos: PrismaJson_Photos;
      description: string;
      type: _36_Enums_CollectionType;
      status: _36_Enums_CollectionStatus;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    })>;
  } & {
    rootProductId: number;
    triggerBy: _36_Enums_BoostSaleTriggerType;
    marketingType: _36_Enums_MarketingType;
    placement: PrismaJson_PlacementBoostSaleType;
    endDate: string;
    startDate: string;
    type: _36_Enums_BoostSaleType;
    status: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    discount: PrismaJson_DiscountBoostSale;
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteBoostSales({
    id,
    storeId,
  }: {
    id: number,
    storeId: string,
  }): CancelablePromise<string> {
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteManyBoostSales({
    id,
    storeId,
  }: {
    id: Array<number>,
    storeId: string,
  }): CancelablePromise<string> {
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
