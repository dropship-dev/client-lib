/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_FulfillmentPlatform } from '../models/_36_Enums_FulfillmentPlatform';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { DisconnectPaymentDto } from '../models/DisconnectPaymentDto';
import type { GeneratePartnerReferralsDto } from '../models/GeneratePartnerReferralsDto';
import type { IntegrationWithFulfillmentPlatformDto } from '../models/IntegrationWithFulfillmentPlatformDto';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { ReconnectPaymentDto } from '../models/ReconnectPaymentDto';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FulfillmentAgencyService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllFulfillmentAgency({
    userId,
    search,
    pageSize = 20,
    nextPageIndex,
  }: {
    userId?: string,
    search?: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      timezone: PrismaJson_Timezone;
      platformFee: number;
      type: _36_Enums_FulfillmentAgencyType;
      costCalculationMethod: _36_Enums_CostCalculationMethod;
      executionTime: string;
      status: _36_Enums_FulfillmentAgencyStatus;
      phone: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
      PaymentOnboarding: Array<{
        onboardingProducts: PrismaJson_OnboardingProducts;
        paypalPartnerReferralId: string;
        vettingRejectedAt: string;
        customCardProcessingStatus: _36_Enums_CapabilityStatus;
        PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
        oAuthIntegration: boolean;
        paymentReceivable: boolean;
        primaryEmailConfirmed: boolean;
        onboardingStatus: _36_Enums_OnboardingStatus;
        onboardingUrl: string;
        onboardingId: string;
        merchantEmail: string;
        merchantId: string;
        paymentType: _36_Enums_PaymentType;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
      }>;
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
      noProduct: number;
      noStore: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency',
      query: {
        'userId': userId,
        'search': search,
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
  public generatePartnerReferrals({
    requestBody,
  }: {
    requestBody: GeneratePartnerReferralsDto,
  }): CancelablePromise<{
    onboardingUrl: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillment-agency/partner-referrals',
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
  public getPaymentOnboarding({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<{
    onboardingProducts: PrismaJson_OnboardingProducts;
    vettingRejectedAt: string;
    customCardProcessingStatus: _36_Enums_CapabilityStatus;
    PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
    oAuthIntegration: boolean;
    paymentReceivable: boolean;
    primaryEmailConfirmed: boolean;
    onboardingStatus: _36_Enums_OnboardingStatus;
    onboardingId: string;
    merchantEmail: string;
    merchantId: string;
    paymentType: _36_Enums_PaymentType;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
    paypalPartnerReferralId: string;
    onboardingUrl: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/payment-onboarding',
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
   * @returns boolean Ok
   * @throws ApiError
   */
  public getPermissionDisconnect({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/permission-disconnect',
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
   * @returns any Ok
   * @throws ApiError
   */
  public getFulfillmentAgency({
    id,
  }: {
    id: number,
  }): CancelablePromise<({
    PaymentOnboarding: Array<{
      onboardingProducts: PrismaJson_OnboardingProducts;
      paypalPartnerReferralId: string;
      vettingRejectedAt: string;
      customCardProcessingStatus: _36_Enums_CapabilityStatus;
      PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
      oAuthIntegration: boolean;
      paymentReceivable: boolean;
      primaryEmailConfirmed: boolean;
      onboardingStatus: _36_Enums_OnboardingStatus;
      onboardingUrl: string;
      onboardingId: string;
      merchantEmail: string;
      merchantId: string;
      paymentType: _36_Enums_PaymentType;
      updatedAt: string;
      createdAt: string;
      isDeleted: boolean;
      storeId: string;
      fulfillmentAgencyId: number;
      id: number;
    }>;
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
  } & {
    timezone: PrismaJson_Timezone;
    platformFee: number;
    type: _36_Enums_FulfillmentAgencyType;
    costCalculationMethod: _36_Enums_CostCalculationMethod;
    executionTime: string;
    status: _36_Enums_FulfillmentAgencyStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/{id}',
      path: {
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
  public updateFulfillmentAgency({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateFulfillmentAgencyDto,
  }): CancelablePromise<{
    timezone: PrismaJson_Timezone;
    platformFee: number;
    type: _36_Enums_FulfillmentAgencyType;
    costCalculationMethod: _36_Enums_CostCalculationMethod;
    executionTime: string;
    status: _36_Enums_FulfillmentAgencyStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/fulfillment-agency/{id}',
      path: {
        'id': id,
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
  public deleteFulfillmentAgency({
    id,
  }: {
    id: number,
  }): CancelablePromise<{
    timezone: PrismaJson_Timezone;
    platformFee: number;
    type: _36_Enums_FulfillmentAgencyType;
    costCalculationMethod: _36_Enums_CostCalculationMethod;
    executionTime: string;
    status: _36_Enums_FulfillmentAgencyStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fulfillment-agency/{id}',
      path: {
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
  public verifyJoinPlatform({
    id,
    paymentType,
  }: {
    id: number,
    paymentType: _36_Enums_PaymentType,
  }): CancelablePromise<{
    onboardingProducts: PrismaJson_OnboardingProducts;
    paypalPartnerReferralId: string;
    vettingRejectedAt: string;
    customCardProcessingStatus: _36_Enums_CapabilityStatus;
    PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
    oAuthIntegration: boolean;
    paymentReceivable: boolean;
    primaryEmailConfirmed: boolean;
    onboardingStatus: _36_Enums_OnboardingStatus;
    onboardingUrl: string;
    onboardingId: string;
    merchantEmail: string;
    merchantId: string;
    paymentType: _36_Enums_PaymentType;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/{id}/verify-join-platform/payment/{paymentType}',
      path: {
        'id': id,
        'paymentType': paymentType,
      },
      errors: {
        400: `Bad request`,
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
  public getStoreDebtPayment({
    id,
  }: {
    id: number,
  }): CancelablePromise<Array<{
    name: string;
    Wallet: Array<{
      balanceDebt: number;
      id: string;
    }>;
    id: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/{id}/store-debt-payment',
      path: {
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
  public getFulfillmentPlatformIntegration({
    id,
    platform,
  }: {
    id: number,
    platform: _36_Enums_FulfillmentPlatform,
  }): CancelablePromise<{
    fulfillmentPlatformAPIKey: string;
    platform: 'BETTA_SUP';
    isLinked: boolean;
    apiKey: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/{id}/fulfillment-platform-integration',
      path: {
        'id': id,
      },
      query: {
        'platform': platform,
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
  public integrateWithFulfillmentPlatform({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: IntegrationWithFulfillmentPlatformDto,
  }): CancelablePromise<{
    fulfillmentPlatformAPIKey: string;
    platform: 'BETTA_SUP';
    isLinked: boolean;
    apiKey: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/fulfillment-agency/{id}/fulfillment-platform-integration',
      path: {
        'id': id,
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
  public disconnectPayment({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: DisconnectPaymentDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillment-agency/{id}/disconnect-payment',
      path: {
        'id': id,
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
  public reconnectPayment({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: ReconnectPaymentDto,
  }): CancelablePromise<{
    onboardingProducts: PrismaJson_OnboardingProducts;
    paypalPartnerReferralId: string;
    vettingRejectedAt: string;
    customCardProcessingStatus: _36_Enums_CapabilityStatus;
    PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
    oAuthIntegration: boolean;
    paymentReceivable: boolean;
    primaryEmailConfirmed: boolean;
    onboardingStatus: _36_Enums_OnboardingStatus;
    onboardingUrl: string;
    onboardingId: string;
    merchantEmail: string;
    merchantId: string;
    paymentType: _36_Enums_PaymentType;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillment-agency/{id}/reconnect-payment',
      path: {
        'id': id,
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
