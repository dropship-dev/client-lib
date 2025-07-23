/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PingPongAuthStatus } from '../models/_36_Enums_PingPongAuthStatus';
import type { ConnectWithPingPongAccountDto } from '../models/ConnectWithPingPongAccountDto';
import type { CreatePingPongAccountDto } from '../models/CreatePingPongAccountDto';
import type { SendOtpAddPingpongAccountDto } from '../models/SendOtpAddPingpongAccountDto';
import type { UpdatePingPongAccountDto } from '../models/UpdatePingPongAccountDto';
import type { VerifyOtpAddPingpongAccountDto } from '../models/VerifyOtpAddPingpongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PingPongAccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @deprecated
   * @returns any Ok
   * @throws ApiError
   */
  public createPingPongAccount({
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    requestBody: CreatePingPongAccountDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    authStatus: _36_Enums_PingPongAuthStatus;
    pingPongClientId: string;
    walletId: string;
    isBlock: boolean;
    isDefault: boolean;
    userId: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: string;
    currency: _36_Enums_CurrencyType;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pingpong-account',
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
  public getAllPingPongAccount({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Array<{
    authStatus: _36_Enums_PingPongAuthStatus;
    pingPongClientId: string;
    walletId: string;
    isBlock: boolean;
    isDefault: boolean;
    userId: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: string;
    currency: _36_Enums_CurrencyType;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pingpong-account',
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
  public connectWithPingPongAccount({
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    requestBody: ConnectWithPingPongAccountDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    email: string;
    loginURL: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pingpong-account/connect',
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
   * @deprecated
   * @returns string Ok
   * @throws ApiError
   */
  public sentOtpAddPingpongAccount({
    requestBody,
  }: {
    requestBody: SendOtpAddPingpongAccountDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pingpong-account/send-otp',
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
   * @deprecated
   * @returns any Ok
   * @throws ApiError
   */
  public verifyOtpAddPingpongAccount({
    requestBody,
  }: {
    requestBody: VerifyOtpAddPingpongAccountDto,
  }): CancelablePromise<{
    authStatus: _36_Enums_PingPongAuthStatus;
    pingPongClientId: string;
    walletId: string;
    isBlock: boolean;
    isDefault: boolean;
    userId: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: string;
    currency: _36_Enums_CurrencyType;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pingpong-account/verify-otp',
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
  public getPingPongAccount({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: string,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    authStatus: _36_Enums_PingPongAuthStatus;
    pingPongClientId: string;
    walletId: string;
    isBlock: boolean;
    isDefault: boolean;
    userId: string;
    email: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    id: string;
    currency: _36_Enums_CurrencyType;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pingpong-account/{id}',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deletePingPongAccount({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: string,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/pingpong-account/{id}',
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
   * @returns string Ok
   * @throws ApiError
   */
  public updateDefault({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdatePingPongAccountDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/pingpong-account/{storeId}',
      path: {
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
}
