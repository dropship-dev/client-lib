/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
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
    fulfillmentAgencyId = 1,
  }: {
    requestBody: CreatePaymentDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<Payment> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment',
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllPayment({
    fulfillmentAgencyId = 1,
  }: {
    fulfillmentAgencyId?: number,
  }): CancelablePromise<Array<{
    publishableKey: string;
    type: PaymentType;
    creator: {
      role: UserRole;
      avatar: string;
      email: string;
      updatedAt: string;
      createdAt: string;
      name: string;
      id: string;
    };
    email: string;
    updatedAt: string;
    createdAt: string;
    name: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment',
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
    fulfillmentAgencyId = 1,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<{
    publishableKey: string;
    type: PaymentType;
    creator: {
      role: UserRole;
      avatar: string;
      email: string;
      updatedAt: string;
      createdAt: string;
      name: string;
      id: string;
    };
    email: string;
    updatedAt: string;
    createdAt: string;
    name: string;
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
    fulfillmentAgencyId = 1,
  }: {
    id: number,
    requestBody: UpdatePaymentDto,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<Payment> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/payment/{id}',
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

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getPaymentStores({
    id,
    fulfillmentAgencyId = 1,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<{
    Store: Array<{
      primaryDomain: string;
      avatar: string;
      email: string;
      name: string;
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
    id,
    requestBody,
    fulfillmentAgencyId = 1,
  }: {
    id: number,
    requestBody: AddPaymentToStores,
    fulfillmentAgencyId?: number,
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
