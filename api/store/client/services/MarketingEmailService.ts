/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_CreateComboItems } from '../models/PrismaJson_CreateComboItems';
import type { UnsubscribeEmailMarketingDto } from '../models/UnsubscribeEmailMarketingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MarketingEmailService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns void
   * @throws ApiError
   */
  public get1X1PixelImage({
    data,
    token,
  }: {
    data: string,
    token: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/tracking/images',
      query: {
        'data': data,
        'token': token,
      },
      errors: {
        400: `Bad request`,
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
  public unsubscribeEmail({
    requestBody,
  }: {
    requestBody: UnsubscribeEmailMarketingDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing/email/unsubscribe',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
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
  public getOrder({
    data,
    token,
  }: {
    data: string,
    token: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/click',
      query: {
        'data': data,
        'token': token,
      },
      errors: {
        400: `Bad request`,
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
  public getTrackingOrderCheckout({
    data,
    token,
  }: {
    data: string,
    token: string,
  }): CancelablePromise<{
    storeId: string;
    comboItems: PrismaJson_CreateComboItems;
    orderItems: Array<{
      productId: number;
      isMainProduct: boolean;
      boostSaleId?: number;
      quantity: number;
      productVariantId: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/email/tracking/order/checkout',
      query: {
        'data': data,
        'token': token,
      },
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
