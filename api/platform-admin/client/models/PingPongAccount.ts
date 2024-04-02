/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyType } from './CurrencyType';
/**
 * Model PingPongAccount
 */
export type PingPongAccount = {
  updatedAt: string;
  createdAt: string;
  walletId: string | null;
  isDeleted: boolean;
  isBlock: boolean;
  isDefault: boolean;
  currency: CurrencyType;
  email: string;
  id: string;
};

