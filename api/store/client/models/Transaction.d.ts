import type { TransactionStatus } from './TransactionStatus';
import type { TransactionType } from './TransactionType';
/**
 * Model Transaction
 */
export type Transaction = {
    updatedAt: string;
    createdAt: string;
    orderId: string | null;
    storeId: string;
    status: TransactionStatus;
    type: TransactionType;
    disputeFee: number;
    lastBalance: number;
    fee: number;
    amount: number;
    id: number;
};
