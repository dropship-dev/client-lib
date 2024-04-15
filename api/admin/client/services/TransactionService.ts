/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccount } from '../models/BankAccount';
import type { PaymentMethodType } from '../models/PaymentMethodType';
import type { RequestPayout } from '../models/RequestPayout';
import type { Transaction } from '../models/Transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStoreTransaction({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
    walletId,
  }: {
    storeId: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    pageSize?: number,
    nextPageIndex?: string,
    walletId?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<(Transaction & {
      RequestPayout: {
        bankAccountId: string;
        convertCurrencyCode: string;
        paymentMethod: PaymentMethodType;
        convertCurrencyAmount: number;
        BankAccount: BankAccount;
        id: string;
      };
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction',
      path: {
        'storeId': storeId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'walletId': walletId,
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
  public getStoreTransaction({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<(Transaction & {
    RequestPayout: RequestPayout;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction/{id}',
      path: {
        'storeId': storeId,
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
