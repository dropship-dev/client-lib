/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyType } from './CurrencyType';
import type { PrismaJson_bankInfo } from './PrismaJson_bankInfo';
/**
 * Model BankAccount
 */
export type BankAccount = {
  updatedAt: string;
  createdAt: string;
  walletId: string | null;
  isDeleted: boolean;
  isBlock: boolean;
  isDefault: boolean;
  /**
   * [bankInfo]
   */
  bank: PrismaJson_bankInfo | null;
  currency: CurrencyType;
  accountHolder: string;
  accountNumber: string;
  id: string;
};

