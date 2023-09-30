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
    disputeFee: number | null;
    lastBalance: number | null;
    fee: number | null;
    amount: number;
    id: number;
};
