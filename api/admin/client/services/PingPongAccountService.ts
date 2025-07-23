/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PingPongAuthStatus } from '../models/_36_Enums_PingPongAuthStatus';
import type { ConnectWithPingPongAccountDto } from '../models/ConnectWithPingPongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PingPongAccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
}
