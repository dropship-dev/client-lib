/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';

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
    updatedAt: string;
    createdAt: string;
    Payment: GetResult_any_any_any_;
    Currency: GetResult_any_any_any_;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    timezone: number;
    customDomain: string;
    domain: string;
    email: string;
    address: string;
    phone: string;
    name: string;
    id: number;
    ActiveTheme: {
      themeTemplateId: number;
      coverImage: string;
      logo: string;
      icon: string;
      storeId: number;
      name: string;
      updatedAt: string;
      createdAt: string;
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
