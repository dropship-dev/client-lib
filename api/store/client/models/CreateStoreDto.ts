/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
import type { StoreType } from './StoreType';
export type CreateStoreDto = {
  name: NameDto;
  email: EmailDto;
  emailFulfillmentAgency?: EmailDto;
  storeType?: StoreType;
  phone?: PhoneWithCountryCode;
  address?: string;
};

