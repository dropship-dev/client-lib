/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { getBoostSalesDto } from '../models/getBoostSalesDto';
import type { getCrossSellByProductDto } from '../models/getCrossSellByProductDto';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { SuggestionResponseDto } from '../models/SuggestionResponseDto';
import type { UpdateOrderDto } from '../models/UpdateOrderDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrderService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStoreOrder({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateOrderDto,
  }): CancelablePromise<{
    clientSecret: string;
    orderId: string;
    id: string;
    timeExpired: number;
    token: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order',
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
  public updateStoreOrder({
    storeId,
    tokenClientInfo,
    requestBody,
  }: {
    storeId: string,
    tokenClientInfo: string,
    requestBody: UpdateOrderDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/update-order',
      path: {
        'storeId': storeId,
      },
      headers: {
        'Token-Client-Info': tokenClientInfo,
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
  public previewStoreOrder({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateOrderDto,
  }): CancelablePromise<{
    freeShipInfo: {
      value?: number;
      status?: boolean;
    };
    total: number;
    discountInfo: {
      value?: number;
      label?: string;
    };
    subTotal: number;
    shippingFee: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/preview',
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
  public suggestionCrossSell({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: Array<getCrossSellByProductDto>,
  }): CancelablePromise<Array<{
    suggestionProduct: Array<{
      ProductVariant: Array<{
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
      }>;
      isEnable: boolean;
      isActive: boolean;
      permalink: string;
      deleted: boolean;
      photos: PrismaJson_Photos;
      name: string;
      id: number;
    }>;
    rootProductId: number;
    triggerBy: _36_Enums_BoostSaleTriggerType;
    marketingType: _36_Enums_MarketingType;
    placement: PrismaJson_PlacementBoostSaleType;
    endDate: string;
    startDate: string;
    discount: PrismaJson_DiscountBoostSale;
    type: _36_Enums_BoostSaleType;
    status: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    Product: Array<{
      ProductVariant: Array<{
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
      }>;
      isEnable: boolean;
      isActive: boolean;
      permalink: string;
      deleted: boolean;
      photos: PrismaJson_Photos;
      name: string;
      id: number;
    }>;
  }>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/suggestion-cross-sell',
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
   * @returns SuggestionResponseDto Ok
   * @throws ApiError
   */
  public suggestionBoostSale({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: Array<getBoostSalesDto>,
  }): CancelablePromise<Array<SuggestionResponseDto>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/suggestion-boost-sales',
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
  public captureStoreOrder({
    storeId,
    orderId,
    paymentType,
    requestBody,
  }: {
    storeId: string,
    orderId: string,
    paymentType: _36_Enums_PaymentType,
    requestBody: CreateOrderDto,
  }): CancelablePromise<{
    status: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/order/{orderId}/capture',
      path: {
        'storeId': storeId,
        'orderId': orderId,
      },
      query: {
        'paymentType': paymentType,
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
