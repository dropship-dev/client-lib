/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode';
import type { PaymentMethodType } from './PaymentMethodType';

export type CreateRequestPayoutDto = {
  amount: number;
  currencyCode: CurrencyCode;
  amountConvert: number;
  type: PaymentMethodType;
  bankId?: string;
  notes?: string;
  storeId: string;
};

