/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentIntegrationType } from '../models/_36_Enums_PaymentIntegrationType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_TaxProviderOwner } from '../models/_36_Enums_TaxProviderOwner';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { ActivePaymentSSFFDto } from '../models/ActivePaymentSSFFDto';
import type { AddNewPaymentOnboardingV1Dto } from '../models/AddNewPaymentOnboardingV1Dto';
import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { CreatePaymentV1Dto } from '../models/CreatePaymentV1Dto';
import type { PaymentMethodIdDto } from '../models/PaymentMethodIdDto';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PaymentService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns void
   * @throws ApiError
   */
  public verifyJoinPlatformWithoutPayment({
    storeId,
    merchantId,
    merchantIdInPayPal,
  }: {
    storeId: string,
    merchantId: string,
    merchantIdInPayPal: string,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payments/verify-join-platform',
      path: {
        'storeId': storeId,
      },
      query: {
        'merchantId': merchantId,
        'merchantIdInPayPal': merchantIdInPayPal,
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
  public listStorePaymentMethods({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    isPrimary: boolean;
    cardHolderName: string;
    cvcCheck: string;
    expireYear: number;
    expireMonth: number;
    last4: string;
    brand: string;
    id: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payments',
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
  public retrieveClientSecret({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    clientSecret: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payments/secret',
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
   * @returns string Ok
   * @throws ApiError
   */
  public setStoreDefaultPaymentMethod({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: PaymentMethodIdDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/payments/set-primary',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteStoreCard({
    storeId,
    paymentMethodId,
  }: {
    storeId: string,
    paymentMethodId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/payments/{paymentMethodId}',
      path: {
        'storeId': storeId,
        'paymentMethodId': paymentMethodId,
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
  public addNewPaymentOnboarding({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: AddNewPaymentOnboardingV1Dto,
  }): CancelablePromise<{
    onboardingId: number;
    url: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment/add-new-payment-onboarding',
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
  public addNewPaymentOnboardingSsff({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: AddNewPaymentOnboardingV1Dto,
  }): CancelablePromise<{
    onboardingId: number;
    url: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment/add-new-payment-onboarding-seller-self-fulfillment',
      query: {
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
  public createPaymentV2({
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    requestBody: CreatePaymentDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<({
    onboardingId: number;
    url: string;
  } | {
    PaymentIntegrationType: _36_Enums_PaymentIntegrationType;
    isConnectPSSFF: boolean;
    environment: _36_Enums_EnvironmentType;
    UIVersion: number;
    deleted: boolean;
    BNcode: string;
    partnerId: string;
    gatewayUrl: string;
    tokenExpiredAt: string;
    token: string;
    isPlatform: boolean;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    merchantId: string;
    salt: string;
    secretKey: string;
    publishableKey: string;
    userId: string;
    type: _36_Enums_PaymentType;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment/create-payment-v2',
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
  public createPayment({
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    requestBody: CreatePaymentV1Dto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    PaymentIntegrationType: _36_Enums_PaymentIntegrationType;
    isConnectPSSFF: boolean;
    environment: _36_Enums_EnvironmentType;
    UIVersion: number;
    deleted: boolean;
    BNcode: string;
    partnerId: string;
    gatewayUrl: string;
    tokenExpiredAt: string;
    token: string;
    isPlatform: boolean;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    merchantId: string;
    salt: string;
    secretKey: string;
    publishableKey: string;
    userId: string;
    type: _36_Enums_PaymentType;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment',
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
  public getAllPayment({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<Array<{
    creator: {
      role: _36_Enums_UserRole;
      avatar: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: string;
    };
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    publishableKey: string;
    type: _36_Enums_PaymentType;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
    PaymentOnboarding: {
      paymentId: number;
      dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
    };
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment',
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
  public getAllPaymentV2({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    paymentOnboarding: Array<{
      paymentId: number;
      dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
    payment: Array<({
      creator: {
        role: _36_Enums_UserRole;
        avatar: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: string;
      };
      isConnectPSSFF: boolean;
      isShowCompanyAddress: boolean;
      companyAddress: string;
      companyPhone: string;
      companyName: string;
      publishableKey: string;
      type: _36_Enums_PaymentType;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    } & {
      taxCount: number;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/get-all-payment-v2',
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
  public getAllPaymentOnboarding({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<Array<{
    paymentId: number;
    dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
    vettingRejectedAt: string;
    onboardingStatus: _36_Enums_OnboardingStatus;
    merchantEmail: string;
    paymentType: _36_Enums_PaymentType;
    fulfillmentAgencyId: number;
    id: number;
    payment: {
      type: _36_Enums_PaymentType;
    };
    isDisconnect: boolean;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/onboarding',
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
  public getPaymentOnboarding({
    fulfillmentAgencyId,
    onBoardingId,
  }: {
    fulfillmentAgencyId: number,
    onBoardingId: number,
  }): CancelablePromise<Array<{
    paymentId: number;
    dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
    vettingRejectedAt: string;
    onboardingStatus: _36_Enums_OnboardingStatus;
    merchantEmail: string;
    paymentType: _36_Enums_PaymentType;
    fulfillmentAgencyId: number;
    payment: {
      type: _36_Enums_PaymentType;
    };
    isDisconnect: boolean;
    onboardingUrl: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/onboarding/{onBoardingId}',
      path: {
        'onBoardingId': onBoardingId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public deletePaymentOnboarding({
    onBoardingId,
    fulfillmentAgencyId,
    storeId,
  }: {
    onBoardingId: number,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/payment/onboarding/{onBoardingId}',
      path: {
        'onBoardingId': onBoardingId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getPayment({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<{
    creator: {
      role: _36_Enums_UserRole;
      avatar: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: string;
    };
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    publishableKey: string;
    type: _36_Enums_PaymentType;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
    taxProviderConnectConfig: Array<{
      countryCode: string;
      id: number;
      TaxProvider: {
        owner: _36_Enums_TaxProviderOwner;
        name: string;
        id: number;
      };
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/{id}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public updatePayment({
    id,
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    requestBody: UpdatePaymentDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<({
    paymentId: number;
    dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
  } | {
    PaymentIntegrationType: _36_Enums_PaymentIntegrationType;
    isConnectPSSFF: boolean;
    environment: _36_Enums_EnvironmentType;
    UIVersion: number;
    deleted: boolean;
    BNcode: string;
    partnerId: string;
    gatewayUrl: string;
    tokenExpiredAt: string;
    token: string;
    isPlatform: boolean;
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    merchantId: string;
    salt: string;
    secretKey: string;
    publishableKey: string;
    userId: string;
    type: _36_Enums_PaymentType;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/payment/{id}',
      path: {
        'id': id,
      },
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
   * @returns string Ok
   * @throws ApiError
   */
  public deletePayment({
    id,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/payment/{id}',
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
  public activePaymentSsff({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: ActivePaymentSSFFDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/payment/{id}/active-payment-ssff',
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
  public getPaymentStores({
    fulfillmentAgencyId,
    id,
  }: {
    fulfillmentAgencyId: number,
    id: number,
  }): CancelablePromise<{
    Store: Array<{
      primaryDomain: string;
      avatar: string;
      status: _36_Enums_StoreStatus;
      email: string;
      name: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payment/{id}/store',
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
   * @returns string Ok
   * @throws ApiError
   */
  public addPaymentToStores({
    fulfillmentAgencyId,
    id,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    id: number,
    requestBody: AddPaymentToStores,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payment/{id}/store',
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
