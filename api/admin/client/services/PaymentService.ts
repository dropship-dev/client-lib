/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { StoreStatus } from '../models/StoreStatus';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';
import type { UserRole } from '../models/UserRole';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PaymentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Payment Ok
   * @throws ApiError
   */
  public createPayment({
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    requestBody: CreatePaymentDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Payment> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getAllPayment({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Array<{
    publishableKey: string;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    creator: {
      role: UserRole;
      avatar: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: string;
    };
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    type: PaymentType;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getAllPaymentOnboarding({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<Array<{
    merchantEmail: string;
    paymentType: PaymentType;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/onboarding',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getPayment({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    publishableKey: string;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    creator: {
      role: UserRole;
      avatar: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: string;
    };
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    type: PaymentType;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns Payment Ok
   * @throws ApiError
   */
  public updatePayment({
    id,
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    requestBody: UpdatePaymentDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Payment> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/payment/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public deletePayment({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/payment/{id}',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getPaymentStores({
    fulfillmentAgencyId,
    id,
  }: {
    fulfillmentAgencyId: number,
    id: number,
  }): CancelablePromise<{
    Store: Array<{
      primaryDomain: string;
      avatar: string;
      email: string;
      name: string;
      status: StoreStatus;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/{id}/store',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public addPaymentToStores({
    fulfillmentAgencyId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    id: number,
    requestBody: AddPaymentToStores,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment/{id}/store',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
