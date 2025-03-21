/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CapabilityStatus } from './_36_Enums_CapabilityStatus';
import type { _36_Enums_OnboardingStatus } from './_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from './_36_Enums_PPCPVettingStatus';
import type { PrismaJson_DataInformationsOnboarding } from './PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from './PrismaJson_OnboardingProducts';
export type DefaultSelection_Prisma__36_PaymentOnboardingPayload_ = {
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

