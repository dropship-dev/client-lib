/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_Timezone } from './PrismaJson_Timezone';
import type { StoreStatus } from './StoreStatus';

/**
 * Model Store
 */
export type Store = {
  updatedAt: string;
  createdAt: string;
  currencyId: number;
  maxUsers: number;
  balance: number;
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

