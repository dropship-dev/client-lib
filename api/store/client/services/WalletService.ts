/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccount } from '../models/BankAccount';
import type { TopUpWalletDto } from '../models/TopUpWalletDto';
import type { Wallet } from '../models/Wallet';
import type { WithdrawWalletDto } from '../models/WithdrawWalletDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WalletService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getWallet({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: string,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<(Wallet & {
    BankAccount: Array<BankAccount>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/wallet/{id}',
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
  public withdrawToWallet({
    id,
    fulfillmentAgencyId,
    requestBody,
  }: {
    id: string,
    fulfillmentAgencyId: number,
    requestBody: WithdrawWalletDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/wallet/{id}/withdraw',
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
   * @returns string Ok
   * @throws ApiError
   */
  public topUpToWallet({
    id,
    fulfillmentAgencyId,
    requestBody,
  }: {
    id: string,
    fulfillmentAgencyId: number,
    requestBody: TopUpWalletDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/wallet/{id}/top-up',
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
