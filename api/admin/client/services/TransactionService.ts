/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PaymentMethodType } from '../models/_36_Enums_PaymentMethodType';
import type { _36_Enums_PingPongAuthStatus } from '../models/_36_Enums_PingPongAuthStatus';
import type { _36_Enums_RequestPayoutStatus } from '../models/_36_Enums_RequestPayoutStatus';
import type { _36_Enums_TransactionStatus } from '../models/_36_Enums_TransactionStatus';
import type { _36_Enums_TransactionType } from '../models/_36_Enums_TransactionType';
import type { PrismaJson_bankInfo } from '../models/PrismaJson_bankInfo';
import type { PrismaJson_HistoryRequestPayout } from '../models/PrismaJson_HistoryRequestPayout';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PingPongTransaction } from '../models/PrismaJson_PingPongTransaction';
import type { PrismaJson_PingPongTrialCalculation } from '../models/PrismaJson_PingPongTrialCalculation';
import type { PrismaJson_TransactionDetails } from '../models/PrismaJson_TransactionDetails';
import type { PrismaJson_TransactionPaymentMethod } from '../models/PrismaJson_TransactionPaymentMethod';
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
    storeId?: string,
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
    data: Array<({
      RequestPayout: {
        convertCurrencyCode: string;
        bankAccountId: string;
        paymentMethod: _36_Enums_PaymentMethodType;
        convertCurrencyAmount: number;
        id: string;
        PingPongAccount: {
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
        };
        BankAccount: {
          walletId: string;
          isBlock: boolean;
          isDefault: boolean;
          bank: PrismaJson_bankInfo;
          accountHolder: string;
          accountNumber: string;
          updatedAt: string;
          createdAt: string;
          isDeleted: boolean;
          id: string;
          currency: _36_Enums_CurrencyType;
        };
      };
    } & {
      requestPayoutId: string;
      isRollback: boolean;
      refundIdGateway: string;
      transactionDetails: PrismaJson_TransactionDetails;
      notes: string;
      disputeFee: number;
      lastBalance: number;
      fee: number;
      amount: number;
      idTransaction: string;
      orderId: string;
      photos: PrismaJson_Photos;
      paymentMethod: PrismaJson_TransactionPaymentMethod;
      walletId: string;
      type: _36_Enums_TransactionType;
      status: _36_Enums_TransactionStatus;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction',
      query: {
        'storeId': storeId,
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
  public exportTransactionInvoice({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<{
    transactionDetails: PrismaJson_TransactionDetails;
    fee: number;
    amount: number;
    idTransaction: string;
    status: _36_Enums_TransactionStatus;
    createdAt: string;
    storeId: string;
    Store: {
      country: string;
      zipCode: string;
      city: string;
      apartmentAddress: string;
      address: string;
      name: string;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/transaction/{id}/export-invoice',
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
  }): CancelablePromise<({
    RequestPayout: {
      payoutInToDate: string;
      payoutInFromDate: string;
      fulfillmentAgencyPingPongAccountId: string;
      approverId: string;
      pingPongTransaction: PrismaJson_PingPongTransaction;
      pingPongTrailCalculation: PrismaJson_PingPongTrialCalculation;
      decidedAt: string;
      historyRequestPayout: PrismaJson_HistoryRequestPayout;
      photos: PrismaJson_Photos;
      noteByAdmin: string;
      noteBySeller: string;
      convertCurrencyCode: string;
      pingPongAccountId: string;
      bankAccountId: string;
      paymentMethod: _36_Enums_PaymentMethodType;
      convertCurrencyAmount: number;
      requestCurrencyAmount: number;
      status: _36_Enums_RequestPayoutStatus;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: string;
    };
  } & {
    requestPayoutId: string;
    isRollback: boolean;
    refundIdGateway: string;
    transactionDetails: PrismaJson_TransactionDetails;
    notes: string;
    disputeFee: number;
    lastBalance: number;
    fee: number;
    amount: number;
    idTransaction: string;
    orderId: string;
    photos: PrismaJson_Photos;
    paymentMethod: PrismaJson_TransactionPaymentMethod;
    walletId: string;
    type: _36_Enums_TransactionType;
    status: _36_Enums_TransactionStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
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
