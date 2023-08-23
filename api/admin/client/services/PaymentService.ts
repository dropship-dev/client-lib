/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
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
  }: {
    requestBody: CreatePaymentDto,
  }): CancelablePromise<Payment> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment',
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
  public getAllPayment(): CancelablePromise<Array<{
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
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment',
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
  }: {
    id: number,
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
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/{id}',
      path: {
        'id': id,
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
