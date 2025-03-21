/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailDto } from './EmailDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_Timezone } from './PrismaJson_Timezone';
export type UpdateStoreDto = {
  name?: string;
  phone?: PhoneWithCountryCode;
  address?: string;
  apartmentAddress?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  email?: EmailDto;
  timezone?: PrismaJson_Timezone;
  avatar?: PhotoDto;
  shippingFee?: number;
  shippingFeeAdditional?: number;
  refundPolicy?: string;
  privacyPolicy?: string;
  termsOfService?: string;
  shippingPolicy?: string;
  currencyId?: number;
  referralCode?: string;
};

