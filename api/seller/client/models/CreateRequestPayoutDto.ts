/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyCode } from './CurrencyCode';
import type { Exclude_PaymentMethodType_CASH_or_BANK_TRANSFER_ } from './Exclude_PaymentMethodType_CASH_or_BANK_TRANSFER_';
export type CreateRequestPayoutDto = {
  otp: string;
  amount: number;
  currencyCode: CurrencyCode;
  amountConvert: number;
  type: Exclude_PaymentMethodType_CASH_or_BANK_TRANSFER_;
  bankId?: string;
  pingPongId: string;
  notes?: string;
  storeId: string;
};

