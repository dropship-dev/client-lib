/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreEmailLogStatus } from '../models/_36_Enums_StoreEmailLogStatus';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { GetListStoreMarketingDto } from '../models/GetListStoreMarketingDto';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { SendEmailToListStoreDto } from '../models/SendEmailToListStoreDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MarketingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createMarketingAccount({
    requestBody,
  }: {
    requestBody: CreateMarketingAccount,
  }): CancelablePromise<{
    subscriptionId: string;
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: _36_Enums_UserRole;
    country: string;
    avatar: string;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
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
    preCursor: boolean;
    nextCursor: string;
    data: Array<{
      status: _36_Enums_StoreEmailLogStatus;
      name: string;
      id: string;
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
    status: _36_Enums_StoreEmailLogStatus;
    createdAt: string;
    id: number;
    EmailMarketingTemplate: {
      name: string;
    };
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
    data: string;
    name: string;
    id: number;
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
