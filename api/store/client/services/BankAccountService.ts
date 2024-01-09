/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccount } from '../models/BankAccount';
import type { CreateBankAccountDto } from '../models/CreateBankAccountDto';
import type { Store } from '../models/Store';
import type { UpdateBankAccountDto } from '../models/UpdateBankAccountDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BankAccountService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns BankAccount Ok
   * @throws ApiError
   */
  public createBankAccount({
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    requestBody: CreateBankAccountDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<BankAccount> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/bank-account',
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
   * @returns BankAccount Ok
   * @throws ApiError
   */
  public getBankAccount({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: string,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<BankAccount> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/bank-account/{id}',
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
  public deleteBankAccount({
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
      url: '/bank-account/{id}',
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
   * @returns Store Ok
   * @throws ApiError
   */
  public updateDefault({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateBankAccountDto,
  }): CancelablePromise<Store> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/bank-account/{storeId}',
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
