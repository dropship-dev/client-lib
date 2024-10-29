/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { GetListStoreMarketingDto } from '../models/GetListStoreMarketingDto';
import type { SendEmailToListStoreDto } from '../models/SendEmailToListStoreDto';
import type { StoreEmailLogStatus } from '../models/StoreEmailLogStatus';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MarketingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns User Ok
   * @throws ApiError
   */
  public createMarketingAccount({
    requestBody,
  }: {
    requestBody: CreateMarketingAccount,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing',
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
  public getListStoreMarketing({
    requestBody,
  }: {
    requestBody: GetListStoreMarketingDto,
  }): CancelablePromise<{
    nextCursor: string;
    data: Array<{
      email: string;
      name: string;
      id: string;
      revenue: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing/store',
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
  public getStoreEmailMarketingLog({
    userId,
  }: {
    userId: string,
  }): CancelablePromise<Array<{
    emailId: string;
    createdAt: string;
    status: StoreEmailLogStatus;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/store/{userId}',
      path: {
        'userId': userId,
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
  public sendEmailToListStore({
    requestBody,
  }: {
    requestBody: SendEmailToListStoreDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/marketing/send-email',
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
  public getEmailMarketingTemplate(): CancelablePromise<Array<{
    name: string;
    id: number;
    data: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/marketing/template',
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
