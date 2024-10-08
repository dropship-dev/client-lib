/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_Timezone } from './PrismaJson_Timezone';
import type { StoreStatus } from './StoreStatus';
import type { StoreType } from './StoreType';

/**
 * Model Store
 */
export type Store = {
  updatedAt: string;
  createdAt: string;
  stripeDefaultPaymentMethodId: string | null;
  stripeCustomerId: string | null;
  currencyId: number;
  fulfillmentAgencyId: number | null;
  maxUsers: number;
  balance: number;
  referralCode: string | null;
  type: StoreType;
  defaultBankAccount: string | null;
  shippingPolicy: string | null;
  termsOfService: string | null;
  privacyPolicy: string | null;
  refundPolicy: string | null;
  shippingFeeAdditional: number;
  shippingFee: number;
  /**
   * [Timezone]
   */
  timezone: PrismaJson_Timezone;
  primaryDomain: string;
  subDomain: string;
  pageName: string;
  status: StoreStatus;
  country: string | null;
  zipCode: string | null;
  city: string | null;
  apartmentAddress: string | null;
  address: string | null;
  avatar: string | null;
  email: string;
  phone: string | null;
  name: string;
  id: string;
};

