/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';

export type PrismaJson_BillingInfo = {
  country: string;
  zipCode: string;
  province: string;
  city: string;
  address2?: string;
  address1: string;
  phone: PhoneWithCountryCode;
  name: NameDto;
  email: EmailDto;
};

