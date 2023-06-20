/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from '../models/Currency';
import type { Payment } from '../models/Payment';

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
    storeId: number,
  }): CancelablePromise<{
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    timezone: number;
    customDomain: string;
    domain: string;
    address: string;
    phone: string;
    updatedAt: string;
    createdAt: string;
    name: string;
    email: string;
    id: number;
    Currency: Currency;
    Payment: Payment;
    ActiveTheme: {
      updatedAt: string;
      createdAt: string;
      themeTemplateId: number;
      storeId: number;
      coverImage: string;
      logo: string;
      icon: string;
      name: string;
      id: number;
      colors: any;
      typos: any;
    };
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

}
