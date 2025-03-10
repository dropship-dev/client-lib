/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreType } from './_36_Enums_StoreType';
import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';
export type CreateStoreDto = {
  name: NameDto;
  email: EmailDto;
  emailFulfillmentAgency?: EmailDto;
  storeType?: _36_Enums_StoreType;
  phone?: PhoneWithCountryCode;
  address?: string;
};

