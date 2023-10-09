import type { TransactionStatus } from './TransactionStatus';
import type { TransactionType } from './TransactionType';
/**
 * Model Transaction
 */
export type Transaction = {
    orderId: string | null;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    status: TransactionStatus;
    type: TransactionType;
    disputeFee: number;
    lastBalance: number;
    fee: number;
    amount: number;
    id: number;
};
