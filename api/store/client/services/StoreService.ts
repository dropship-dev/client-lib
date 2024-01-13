/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from '../models/Currency';
import type { CustomDomain } from '../models/CustomDomain';
import type { PaymentType } from '../models/PaymentType';
import type { Photos } from '../models/Photos';
import type { Theme } from '../models/Theme';
import type { ThemeTemplate } from '../models/ThemeTemplate';
import type { Timezone } from '../models/Timezone';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StoreService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getStoreActiveTheme({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    subDomain: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    timezone: Timezone;
    phone: string;
    email: string;
    name: string;
    Currency: Currency;
    Product: Array<{
      permalink: string;
      photos: Photos;
      SKU: string;
      name: string;
      id: number;
    }>;
    CustomDomain: Array<CustomDomain>;
    updatedAt: string;
    createdAt: string;
    id: string;
    fulfillmentAgencyId: number;
    Theme: (Theme & {
      ThemeTemplate: ThemeTemplate;
    });
    Payment: Array<{
      publishableKey: string;
      email: string;
      updatedAt: string;
      createdAt: string;
      type: PaymentType;
      id: number;
      clientToken: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/active-theme',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStorePaymentMethod({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    publishableKey: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    type: PaymentType;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStorePaymentMethodClientToken({
    storeId,
    clientId,
  }: {
    storeId: string,
    clientId?: string,
  }): CancelablePromise<{
    clientToken: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method/client-token',
      path: {
        'storeId': storeId,
      },
      query: {
        'clientId': clientId,
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
