/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from '../models/Currency';
import type { CustomDomain } from '../models/CustomDomain';
import type { PaymentType } from '../models/PaymentType';
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
    updatedAt: string;
    createdAt: string;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    timezone: Timezone;
    subDomain: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    email: string;
    phone: string;
    name: string;
    id: string;
    Currency: Currency;
    Payment: Array<{
      publishableKey: string;
      type: PaymentType;
      updatedAt: string;
      createdAt: string;
      email: string;
      id: number;
    }>;
    CustomDomain: Array<CustomDomain>;
    Theme: (Theme & {
      ThemeTemplate: ThemeTemplate;
    });
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
    type: PaymentType;
    updatedAt: string;
    createdAt: string;
    email: string;
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

}
