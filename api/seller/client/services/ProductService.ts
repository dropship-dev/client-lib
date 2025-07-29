/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { CloneProductDto } from '../models/CloneProductDto';
import type { CreateProductFromSellerInDependenceDto } from '../models/CreateProductFromSellerInDependenceDto';
import type { GetAllProductType } from '../models/GetAllProductType';
import type { getStatusCombosType } from '../models/getStatusCombosType';
import type { getVariantsType } from '../models/getVariantsType';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_CountryInformation } from '../models/PrismaJson_CountryInformation';
import type { PrismaJson_CustomVariantOptions } from '../models/PrismaJson_CustomVariantOptions';
import type { PrismaJson_CustomVariantOptionValues } from '../models/PrismaJson_CustomVariantOptionValues';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_ProductDiscountItems } from '../models/PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductHistoryVariants } from '../models/PrismaJson_ProductHistoryVariants';
import type { PrismaJson_ProductRequirementItems } from '../models/PrismaJson_ProductRequirementItems';
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { Product } from '../models/Product';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { UpdateProductStatusDto } from '../models/UpdateProductStatusDto';
import type { UpdateProductStatusesDto } from '../models/UpdateProductStatusesDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProductService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createProductForStoreInDependence({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateProductFromSellerInDependenceDto,
  }): CancelablePromise<{
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
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/seller-independence',
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
   * @returns GetAllProductType Ok
   * @throws ApiError
   */
  public getAllProduct({
    storeId,
    pageSize = 20,
    nextPageIndex,
    name,
    tags,
    isActive,
    isInactive,
    haveDiscount,
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
    isInactive?: boolean,
    haveDiscount?: boolean,
    startPrice?: number,
    endPrice?: number,
    isCheckRootProductCrossSell?: boolean,
  }): CancelablePromise<GetAllProductType> {
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
        'isInactive': isInactive,
        'haveDiscount': haveDiscount,
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteProducts({
    storeId,
    productIds,
  }: {
    storeId: string,
    productIds: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product',
      path: {
        'storeId': storeId,
      },
      query: {
        'productIds': productIds,
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
  public updateProductStatuses({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateProductStatusesDto,
  }): CancelablePromise<Array<{
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
  }>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/status',
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
  public getProductByPermalink({
    storeId,
    permalink,
    productId,
  }: {
    storeId: string,
    permalink?: string,
    productId?: number,
  }): CancelablePromise<{
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
    Campaign: ({
      listDiscount: Array<{
        requirementDiscount: PrismaJson_ProductRequirementItems;
        typeDiscount: PrismaJson_ProductDiscountItems;
        position: number;
        userUpdated: string;
        userCreated: string;
        label: string;
        campaignId: string;
        updatedAt: string;
        createdAt: string;
        id: string;
      }>;
    } & {
      userUpdated: string;
      userCreated: string;
      endDate: string;
      startDate: string;
      label: string;
      status: boolean;
      updatedAt: string;
      createdAt: string;
      id: string;
    });
    VariantCombo: Array<({
      Product: {
        platformProductId: number;
        name: string;
      };
    } & {
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
    })>;
    ProductVariant: Array<({
      Product: {
        platformProductId: number;
        name: string;
      };
      PlatformVariant: {
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        platformProductId: number;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
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
    Review: Array<{
      comment: string;
      rating: number;
      productId: number;
      photos: PrismaJson_Photos;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    }>;
    GoogleTagManager: Array<{
      tag: string;
    }>;
    GoogleAnalytic: Array<{
      measurementId: string;
    }>;
    TiktokPixel: Array<{
      pixelId: string;
    }>;
    SnapChatPixel: Array<{
      pixelId: string;
    }>;
    FbPixel: Array<{
      pixelId: string;
      token: string;
    }>;
    Tag: Array<{
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    }>;
    PlatformProduct: {
      variantOption: PrismaJson_VariantOptions;
      id: number;
    };
    BoostSale: Array<({
      Product: Array<{
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
  public getProductByPermalinkSideStore({
    storeId,
    permalink,
  }: {
    storeId: string,
    permalink: string,
  }): CancelablePromise<({
    Campaign: ({
      listDiscount: Array<{
        requirementDiscount: PrismaJson_ProductRequirementItems;
        typeDiscount: PrismaJson_ProductDiscountItems;
        position: number;
        userUpdated: string;
        userCreated: string;
        label: string;
        campaignId: string;
        updatedAt: string;
        createdAt: string;
        id: string;
      }>;
    } & {
      userUpdated: string;
      userCreated: string;
      endDate: string;
      startDate: string;
      label: string;
      status: boolean;
      updatedAt: string;
      createdAt: string;
      id: string;
    });
    VariantCombo: Array<({
      Product: {
        platformProductId: number;
        name: string;
      };
    } & {
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
    })>;
    ProductVariant: Array<({
      Product: {
        platformProductId: number;
        name: string;
      };
      PlatformVariant: {
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        platformProductId: number;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
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
    Review: Array<{
      comment: string;
      rating: number;
      productId: number;
      photos: PrismaJson_Photos;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    }>;
    GoogleTagManager: Array<{
      tag: string;
    }>;
    GoogleAnalytic: Array<{
      measurementId: string;
    }>;
    TiktokPixel: Array<{
      pixelId: string;
    }>;
    SnapChatPixel: Array<{
      pixelId: string;
    }>;
    FbPixel: Array<{
      pixelId: string;
      token: string;
    }>;
    Tag: Array<{
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    }>;
    PlatformProduct: {
      variantOption: PrismaJson_VariantOptions;
      id: number;
    };
    Collection: Array<{
      name: string;
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
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/permalink-side-store',
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
  public getStatusBoostSale({
    storeId,
    boostSaleIds,
  }: {
    storeId: string,
    boostSaleIds: Array<number>,
  }): CancelablePromise<Array<{
    status: boolean;
    id: number;
    Product: Array<{
      id: number;
    }>;
    discount: PrismaJson_DiscountBoostSale;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/getStatusBoostSales',
      path: {
        'storeId': storeId,
      },
      query: {
        'boostSaleIds': boostSaleIds,
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
  public getUpSellByProductIds({
    storeId,
    productIds,
  }: {
    storeId: string,
    productIds: Array<number>,
  }): CancelablePromise<Array<{
    upSellId: number;
    productId: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/getUpSellByProductIds',
      path: {
        'storeId': storeId,
      },
      query: {
        'productIds': productIds,
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
  }): CancelablePromise<({
    Campaign: ({
      listDiscount: Array<{
        requirementDiscount: PrismaJson_ProductRequirementItems;
        typeDiscount: PrismaJson_ProductDiscountItems;
        position: number;
        userUpdated: string;
        userCreated: string;
        label: string;
        campaignId: string;
        updatedAt: string;
        createdAt: string;
        id: string;
      }>;
    } & {
      userUpdated: string;
      userCreated: string;
      endDate: string;
      startDate: string;
      label: string;
      status: boolean;
      updatedAt: string;
      createdAt: string;
      id: string;
    });
    VariantCombo: Array<{
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
    ProductVariant: Array<({
      PlatformVariant: {
        cost: PrismaJson_PlatformCostInfo;
        price: number;
        photo: string;
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
    Tag: Array<{
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    }>;
    PlatformProduct: {
      variantOption: PrismaJson_VariantOptions;
      photos: PrismaJson_Photos;
      name: string;
      Tag: Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
      }>;
    };
    ThemePagesOnProducts: Array<{
      themePageId: number;
    }>;
    Store: {
      RegionalShippingFee: Array<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        deleted: boolean;
        shippingFeeAdditional: number;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
      }>;
    };
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateProduct({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: UpdateProductDto,
  }): CancelablePromise<{
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
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/product/{productId}',
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
  public deleteProduct({
    storeId,
    productId,
  }: {
    storeId: string,
    productId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
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
  /**
   * @returns Product Ok
   * @throws ApiError
   */
  public updateProductStatus({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: UpdateProductStatusDto,
  }): CancelablePromise<Product> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/status',
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
  public cloneProduct({
    storeId,
    productId,
    requestBody,
  }: {
    storeId: string,
    productId: number,
    requestBody: CloneProductDto,
  }): CancelablePromise<({
    ProductVariant: Array<{
      platformVariantId: number;
      name: string;
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
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/product/{productId}/clone',
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
  public getOriginalProduct({
    storeId,
    productId,
  }: {
    storeId: string,
    productId: number,
  }): CancelablePromise<{
    isOriginal: boolean;
    variants: PrismaJson_ProductHistoryVariants;
    versionHistory: string;
    productId: number;
    customVariantOption: PrismaJson_CustomVariantOptions;
    variantOption: PrismaJson_VariantOptions;
    SKU: string;
    details: string;
    photos: PrismaJson_Photos;
    description: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/product/{productId}/original',
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
