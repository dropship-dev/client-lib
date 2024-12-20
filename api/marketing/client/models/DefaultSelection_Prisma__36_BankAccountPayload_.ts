/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CurrencyType } from './_36_Enums_CurrencyType';
import type { PrismaJson_bankInfo } from './PrismaJson_bankInfo';
export type DefaultSelection_Prisma__36_BankAccountPayload_ = {
  walletId: string;
  isBlock: boolean;
  isDefault: boolean;
  bank: PrismaJson_bankInfo;
  currency: _36_Enums_CurrencyType;
  accountHolder: string;
  accountNumber: string;
  updatedAt: string;
  createdAt: string;
  isDeleted: boolean;
  id: string;
};

