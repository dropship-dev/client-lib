/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PaymentMethodType } from '../models/_36_Enums_PaymentMethodType';
import type { _36_Enums_RequestPayoutStatus } from '../models/_36_Enums_RequestPayoutStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { BankAccount } from '../models/BankAccount';
import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { PingPongAccount } from '../models/PingPongAccount';
import type { PrismaJson_bankInfo } from '../models/PrismaJson_bankInfo';
import type { PrismaJson_HistoryRequestPayout } from '../models/PrismaJson_HistoryRequestPayout';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_SettingPayoutRequestDay } from '../models/PrismaJson_SettingPayoutRequestDay';
import type { PrismaJson_SettingPayoutRequestTime } from '../models/PrismaJson_SettingPayoutRequestTime';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { RequestPayout } from '../models/RequestPayout';
import type { Store } from '../models/Store';
import type { UpdateRequestPayoutDto } from '../models/UpdateRequestPayoutDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RequestPayoutService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createRequestPayout({
    requestBody,
  }: {
    requestBody: CreateRequestPayoutDto,
  }): CancelablePromise<{
    payoutInToDate: string;
    payoutInFromDate: string;
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
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-payout',
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
  public getAllRequestPayout({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    statusRequest,
    pageSize,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    statusRequest?: Array<_36_Enums_RequestPayoutStatus>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<({
      PingPongAccount: {
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
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
      Store: {
        isConversionRate: boolean;
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        invitedDate: string;
        invitedById: number;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        othersFee: number;
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
      };
    } & {
      payoutInToDate: string;
      payoutInFromDate: string;
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
    })>;
    countStatusRequestPayout: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'statusRequest': statusRequest,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
  public getRequestPayoutV2({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    statusRequest,
    pageSize,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    statusRequest?: Array<_36_Enums_RequestPayoutStatus>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    total: {
      countStatusRequestPayout: number;
    };
    data: {
      orderBy: string;
      nextPageIndex: string;
      prePageIndex: string;
      total: number;
      data: Array<({
        PingPongAccount: {
          walletId: string;
          isBlock: boolean;
          isDefault: boolean;
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
        Store: {
          isConversionRate: boolean;
          stripeDefaultPaymentMethodId: string;
          stripeCustomerId: string;
          warning: boolean;
          invitedDate: string;
          invitedById: number;
          currencyId: number;
          maxUsers: number;
          balance: number;
          referralCode: string;
          defaultBankAccount: string;
          shippingFeeAdditional: number;
          shippingFee: number;
          primaryDomain: string;
          subDomain: string;
          pageName: string;
          closedAt: string;
          country: string;
          zipCode: string;
          city: string;
          apartmentAddress: string;
          address: string;
          avatar: string;
          othersFee: number;
          shippingPolicy: string;
          termsOfService: string;
          refundPolicy: string;
          privacyPolicy: string;
          timezone: PrismaJson_Timezone;
          type: _36_Enums_StoreType;
          status: _36_Enums_StoreStatus;
          phone: string;
          email: string;
          name: string;
          updatedAt: string;
          createdAt: string;
          isDeleted: boolean;
          fulfillmentAgencyId: number;
          id: string;
        };
      } & {
        payoutInToDate: string;
        payoutInFromDate: string;
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
      })>;
      countStatusRequestPayout: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/v2',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'statusRequest': statusRequest,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
  public getRequestHistory({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    statusRequest,
    pageSize,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    statusRequest?: Array<_36_Enums_RequestPayoutStatus>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    total: {
      countStatusRequestPayout: number;
    };
    data: {
      orderBy: string;
      nextPageIndex: string;
      prePageIndex: string;
      total: number;
      data: Array<({
        PingPongAccount: {
          walletId: string;
          isBlock: boolean;
          isDefault: boolean;
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
        Store: {
          isConversionRate: boolean;
          stripeDefaultPaymentMethodId: string;
          stripeCustomerId: string;
          warning: boolean;
          invitedDate: string;
          invitedById: number;
          currencyId: number;
          maxUsers: number;
          balance: number;
          referralCode: string;
          defaultBankAccount: string;
          shippingFeeAdditional: number;
          shippingFee: number;
          primaryDomain: string;
          subDomain: string;
          pageName: string;
          closedAt: string;
          country: string;
          zipCode: string;
          city: string;
          apartmentAddress: string;
          address: string;
          avatar: string;
          othersFee: number;
          shippingPolicy: string;
          termsOfService: string;
          refundPolicy: string;
          privacyPolicy: string;
          timezone: PrismaJson_Timezone;
          type: _36_Enums_StoreType;
          status: _36_Enums_StoreStatus;
          phone: string;
          email: string;
          name: string;
          updatedAt: string;
          createdAt: string;
          isDeleted: boolean;
          fulfillmentAgencyId: number;
          id: string;
        };
      } & {
        payoutInToDate: string;
        payoutInFromDate: string;
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
      })>;
      countStatusRequestPayout: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/request-history',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'statusRequest': statusRequest,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
  public waringRequest({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    receiverRequestDay: PrismaJson_SettingPayoutRequestDay;
    receiverRequestTime: PrismaJson_SettingPayoutRequestTime;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/warning-request',
      query: {
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
  public countRequestPayout({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    statusRequest,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    statusRequest?: Array<_36_Enums_RequestPayoutStatus>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    countStatusRequestPayout: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/count-request-payout',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'statusRequest': statusRequest,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
   * @returns number Ok
   * @throws ApiError
   */
  public getAmountRequestByStatus({
    statusRequestPayout,
    fulfillmentAgencyId,
  }: {
    statusRequestPayout: Array<_36_Enums_RequestPayoutStatus>,
    fulfillmentAgencyId: number,
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/requesting-amount',
      query: {
        'statusRequestPayout': statusRequestPayout,
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
  public getStatusCreateRequestPayout({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    status: 'REQUESTING' | 'REVIEW';
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/status-create-request',
      query: {
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
  public getRequestPayout({
    storeId,
    id,
  }: {
    storeId: string,
    id: string,
  }): CancelablePromise<(RequestPayout & {
    Store: Store | null;
    PingPongAccount: PingPongAccount | null;
    BankAccount: BankAccount | null;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/{id}',
      path: {
        'id': id,
      },
      query: {
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
  public updateRequestPayout({
    id,
    fulfillmentAgencyId,
    requestBody,
  }: {
    id: string,
    fulfillmentAgencyId: number,
    requestBody: UpdateRequestPayoutDto,
  }): CancelablePromise<{
    payoutInToDate: string;
    payoutInFromDate: string;
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
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/request-payout/{id}',
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
  public toolSyncBalanceAmountForSeller(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/request-payout/tool-sync-balance-amount-for-seller',
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
  public changeToRequesting({
    id,
    fulfillmentAgencyId,
  }: {
    id: string,
    fulfillmentAgencyId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-payout/{id}/change-to-requesting',
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
   * @returns number Ok
   * @throws ApiError
   */
  public getAllAmountRequestingStatus({
    statusRequestPayout,
    fulfillmentAgencyId,
  }: {
    statusRequestPayout: _36_Enums_RequestPayoutStatus,
    fulfillmentAgencyId: number,
  }): CancelablePromise<number> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/status/{statusRequestPayout}',
      path: {
        'statusRequestPayout': statusRequestPayout,
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
}
