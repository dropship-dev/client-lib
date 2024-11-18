/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OnboardingStatus } from './OnboardingStatus';

/**
 * Model PaymentOnboarding
 */
export type PaymentOnboarding = {
  updatedAt: string;
  createdAt: string;
  onboardingStatus: OnboardingStatus | null;
  onboardingUrl: string;
  onboardingId: string;
  merchantEmail: string | null;
  merchantId: string | null;
  paymentId: number;
  fulfillmentAgencyId: number | null;
  storeId: string | null;
  id: number;
};

