/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
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
    id: number;
    BoostSale: Array<({
      Product: Array<({
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
          productId: number;
          cost: PrismaJson_CostInfo;
          supplierPrice: number;
          price: number;
          photo: string;
          isEnable: boolean;
          isActive: boolean;
          variantOption: PrismaJson_VariantOptionValues;
          SKU: string;
          deleted: boolean;
          name: string;
          updatedAt: string;
          createdAt: string;
          id: number;
        })>;
      } & {
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
      })>;
      Collection: Array<{
        Product: Array<({
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
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            deleted: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
          })>;
        } & {
          podTemplateId: number;
          campaignId: string;
          isEnable: boolean;
          isActive: boolean;
          supplierContact: string;
          variantOption: PrismaJson_VariantOptions;
          availableSet: PrismaJson_AvailableSet;
          SKU: string;
          details: string;
          permalink: string;
          deleted: boolean;
          platformProductId: number;
          description: string;
          photos: PrismaJson_Photos;
          shippingFeeAdditional: number;
          shippingFee: number;
          name: string;
          updatedAt: string;
          createdAt: string;
          storeId: string;
          id: number;
        })>;
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
        Product: Array<({
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
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            deleted: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
          })>;
        } & {
          podTemplateId: number;
          campaignId: string;
          isEnable: boolean;
          isActive: boolean;
          supplierContact: string;
          variantOption: PrismaJson_VariantOptions;
          availableSet: PrismaJson_AvailableSet;
          SKU: string;
          details: string;
          permalink: string;
          deleted: boolean;
          platformProductId: number;
          description: string;
          photos: PrismaJson_Photos;
          shippingFeeAdditional: number;
          shippingFee: number;
          name: string;
          updatedAt: string;
          createdAt: string;
          storeId: string;
          id: number;
        })>;
        Collection: Array<{
          Product: Array<({
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
              productId: number;
              cost: PrismaJson_CostInfo;
              supplierPrice: number;
              price: number;
              photo: string;
              isEnable: boolean;
              isActive: boolean;
              variantOption: PrismaJson_VariantOptionValues;
              SKU: string;
              deleted: boolean;
              name: string;
              updatedAt: string;
              createdAt: string;
              id: number;
            })>;
          } & {
            podTemplateId: number;
            campaignId: string;
            isEnable: boolean;
            isActive: boolean;
            supplierContact: string;
            variantOption: PrismaJson_VariantOptions;
            availableSet: PrismaJson_AvailableSet;
            SKU: string;
            details: string;
            permalink: string;
            deleted: boolean;
            platformProductId: number;
            description: string;
            photos: PrismaJson_Photos;
            shippingFeeAdditional: number;
            shippingFee: number;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
          })>;
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
      description: string;
      photos: PrismaJson_Photos;
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
}
