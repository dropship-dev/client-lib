import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_TransactionDetails } from './PrismaJson_TransactionDetails';
import type { PrismaJson_TransactionPaymentMethod } from './PrismaJson_TransactionPaymentMethod';
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
    /**
     * [TransactionDetails]
     */
    transactionDetails: PrismaJson_TransactionDetails | null;
    /**
     * [TransactionPaymentMethod]
     */
    paymentMethod: PrismaJson_TransactionPaymentMethod | null;
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
