/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FraudDetectionStatusType } from '../models/_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_FraudDetectionType } from '../models/_36_Enums_FraudDetectionType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { AddPlatformProductStoresDto } from '../models/AddPlatformProductStoresDto';
import type { ApproveStoreDto } from '../models/ApproveStoreDto';
import type { FraudDetection } from '../models/FraudDetection';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_ } from '../models/Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_TypeOfFraudService } from '../models/PrismaJson_TypeOfFraudService';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { Store } from '../models/Store';
import type { StoreUser } from '../models/StoreUser';
import type { UpdateManyStorePaymentMethodDto } from '../models/UpdateManyStorePaymentMethodDto';
import type { UpdateStorePaymentMethodDto } from '../models/UpdateStorePaymentMethodDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StoreService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStores({
    fulfillmentAgencyId,
    pageSize = 20,
    status,
    periodFrom = '2023-01-01T00:00:00.000Z',
    nextPageIndex,
    name,
    userId,
    paymentGatewayIds,
    platformProductId,
    referralCode,
    fraudStatus,
  }: {
    fulfillmentAgencyId?: number,
    pageSize?: number,
    status?: Array<_36_Enums_StoreStatus>,
    periodFrom?: string,
    nextPageIndex?: string,
    name?: string,
    userId?: string,
    paymentGatewayIds?: Array<number>,
    platformProductId?: number,
    referralCode?: string,
    fraudStatus?: Array<FraudStatusType>,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      FraudDetection: Array<{
        labels: PrismaJson_TypeOfFraudService;
        idempotencyKey: string;
        orderId: string;
        systemFraudDetect: _36_Enums_FraudDetectionStatusType;
        humanFraudDetect: _36_Enums_FraudDetectionStatusType;
        type: _36_Enums_FraudDetectionType;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
      }>;
      StoreUser: Array<{
        role: _36_Enums_StoreRole;
      }>;
      referralCode: string;
      primaryDomain: string;
      subDomain: string;
      avatar: string;
      Payment: Array<{
        type: _36_Enums_PaymentType;
        name: string;
        id: number;
      }>;
      timezone: PrismaJson_Timezone;
      status: _36_Enums_StoreStatus;
      phone: string;
      email: string;
      name: string;
      Wallet: Array<{
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        balanceUnavailable: PrismaJson_UnavailableBalance;
        payoutAmount: number;
        holdAmount: number;
        balanceDebt: number;
        balanceAvailable: number;
        balanceAmount: number;
        walletName: string;
        id: string;
      }>;
      FulfillmentAgency: {
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        name: string;
      };
      createdAt: string;
      fulfillmentAgencyId: number;
      id: string;
      userRole: _36_Enums_StoreRole;
      fraudStatus: FraudStatusType;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'pageSize': pageSize,
        'status': status,
        'periodFrom': periodFrom,
        'nextPageIndex': nextPageIndex,
        'name': name,
        'userId': userId,
        'paymentGatewayIds': paymentGatewayIds,
        'platformProductId': platformProductId,
        'referralCode': referralCode,
        'fraudStatus': fraudStatus,
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
  public addProductToStores({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: AddPlatformProductStoresDto,
  }): CancelablePromise<Array<{
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/product',
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
  public updateProductToStores({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: AddPlatformProductStoresDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/update-product',
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateManyStorePaymentMethod({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: UpdateManyStorePaymentMethodDto,
  }): CancelablePromise<Array<{
    Payment: Array<{
      publishableKey: string;
      isShowCompanyAddress: boolean;
      companyAddress: string;
      companyPhone: string;
      companyName: string;
      type: _36_Enums_PaymentType;
      email: string;
      name: string;
      createdAt: string;
      id: number;
    }>;
    id: string;
  }>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/payment-method',
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
   * @returns any Ok
   * @throws ApiError
   */
  public getStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<(Store & {
    FulfillmentAgency: FulfillmentAgency | null;
  } & {
    StoreUser: Array<StoreUser>;
  } & {
    FraudDetection: Array<FraudDetection>;
  } & {
    Wallet: Array<Wallet>;
  } & {
    fraudStatus?: FraudStatusType;
  } & {
    Payment: Array<Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}',
      path: {
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
  public updateStoreStatus({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStoreStatusDto,
  }): CancelablePromise<{
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/status',
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public approveStore({
    fulfillmentAgencyId,
    storeId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    storeId: string,
    requestBody: ApproveStoreDto,
  }): CancelablePromise<{
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/status/approve',
      path: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateStorePaymentMethod({
    fulfillmentAgencyId,
    storeId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    storeId: string,
    requestBody: UpdateStorePaymentMethodDto,
  }): CancelablePromise<{
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/payment-method',
      path: {
        'storeId': storeId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteStorePaymentMethod({
    fulfillmentAgencyId,
    storeId,
    paymentId,
  }: {
    fulfillmentAgencyId: number,
    storeId: string,
    paymentId: number,
  }): CancelablePromise<{
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/payment-method',
      path: {
        'storeId': storeId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'paymentId': paymentId,
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
  public getStorePaymentMethod({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    publishableKey: string;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    type: _36_Enums_PaymentType;
    email: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method',
      path: {
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
