/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FulfillmentAgencyService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAgencyByEmail({
    email,
  }: {
    email: string,
  }): CancelablePromise<{
    avatar: string;
    nameAgency: string;
    email: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/get-agency-by-email',
      query: {
        'email': email,
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
    onBoardingPaymentId,
  }: {
    id: number,
    paymentType: _36_Enums_PaymentType,
    onBoardingPaymentId: number,
  }): CancelablePromise<{
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/{id}/verify-join-platform/payment/{paymentType}/onBoardingPayment/{onBoardingPaymentId}',
      path: {
        'id': id,
        'paymentType': paymentType,
        'onBoardingPaymentId': onBoardingPaymentId,
      },
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
