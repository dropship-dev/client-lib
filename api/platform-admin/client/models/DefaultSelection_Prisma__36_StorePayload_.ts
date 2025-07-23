/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreStatus } from './_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from './_36_Enums_StoreType';
import type { PrismaJson_Timezone } from './PrismaJson_Timezone';
export type DefaultSelection_Prisma__36_StorePayload_ = {
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
  taxFeatureEnabled: boolean;
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

