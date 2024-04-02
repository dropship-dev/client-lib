import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { TransactionStatus } from './TransactionStatus';
import type { TransactionType } from './TransactionType';
/**
 * Model Transaction
 */
export type Transaction = {
    updatedAt: string;
    createdAt: string;
    isRollback: boolean;
    refundIdGateway: string | null;
    notes: string | null;
    /**
     * [Photos]
     */
    photos: PrismaJson_Photos | null;
    walletId: string | null;
    requestPayoutId: string | null;
    orderId: string | null;
    storeId: string | null;
    status: TransactionStatus;
    type: TransactionType;
    disputeFee: number;
    lastBalance: number;
    fee: number;
    amount: number;
    idTransaction: string | null;
    id: number;
};
