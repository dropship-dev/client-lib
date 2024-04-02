/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_UnavailableBalance } from './PrismaJson_UnavailableBalance';
/**
 * Model Wallet
 */
export type Wallet = {
  updatedAt: string;
  createdAt: string;
  isDeleted: boolean;
  storeId: string | null;
  fulfillmentAgencyId: number | null;
  /**
   * [UnavailableBalance]
   */
  balanceUnavailable: PrismaJson_UnavailableBalance | null;
  balanceAvailable: number;
  balanceAmount: number;
  walletName: string | null;
  id: string;
};

