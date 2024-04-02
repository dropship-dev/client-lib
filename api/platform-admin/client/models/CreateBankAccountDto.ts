/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { bankInfo } from './bankInfo';
import type { CurrencyType } from './CurrencyType';

export type CreateBankAccountDto = {
  accountNumber: string;
  accountHolder: string;
  currency: CurrencyType;
  bank: bankInfo;
  isDefault?: boolean;
};

