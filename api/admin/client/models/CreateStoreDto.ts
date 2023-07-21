/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhoneWithCountryCode } from './PhoneWithCountryCode';

export type CreateStoreDto = {
  name: NameDto;
  email: EmailDto;
  phone?: PhoneWithCountryCode;
  address?: string;
};

