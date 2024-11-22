/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoostSaleTriggerType } from '../models/BoostSaleTriggerType';
import type { BoostSaleType } from '../models/BoostSaleType';
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { DiscountBoostSale } from '../models/DiscountBoostSale';
import type { getBoostSalesDto } from '../models/getBoostSalesDto';
import type { getCrossSellByProductDto } from '../models/getCrossSellByProductDto';
import type { MarketingType } from '../models/MarketingType';
import type { PaymentType } from '../models/PaymentType';
import type { Photos } from '../models/Photos';
import type { PlacementBoostSaleType } from '../models/PlacementBoostSaleType';
import type { ProductVariant } from '../models/ProductVariant';
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
      permalink: string;
      deleted: boolean;
      isEnable: boolean;
      isActive: boolean;
      photos: Photos;
      name: string;
      ProductVariant: Array<ProductVariant>;
      id: number;
    }>;
    Product: Array<{
      permalink: string;
      deleted: boolean;
      isEnable: boolean;
      isActive: boolean;
      photos: Photos;
      name: string;
      ProductVariant: Array<ProductVariant>;
      id: number;
    }>;
    rootProductId: number;
    updatedAt: string;
    createdAt: string;
    endDate: string;
    startDate: string;
    storeId: string;
    triggerBy: BoostSaleTriggerType;
    marketingType: MarketingType;
    discount: DiscountBoostSale;
    placement: PlacementBoostSaleType;
    status: boolean;
    type: BoostSaleType;
    name: string;
    id: number;
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
    bmClientInfo,
  }: {
    storeId: string,
    orderId: string,
    paymentType: PaymentType,
    requestBody: CreateOrderDto,
    bmClientInfo?: string,
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
      headers: {
        'BM-Client-Info': bmClientInfo,
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
