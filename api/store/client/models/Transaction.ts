/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionStatus } from './TransactionStatus';
import type { TransactionType } from './TransactionType';

/**
 * Model Transaction
 */
export type Transaction = {
  updatedAt: string;
  createdAt: string;
  storeId: string;
  status: TransactionStatus;
  type: TransactionType;
  lastBalance: number | null;
  fee: number | null;
  amount: number;
  id: number;
};

