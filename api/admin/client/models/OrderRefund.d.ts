import type { PrismaJson_RefundOrderItems } from './PrismaJson_RefundOrderItems';
/**
 * Model OrderRefund
 */
export type OrderRefund = {
    updatedAt: string;
    createdAt: string;
    isRollback: boolean;
    orderId: string | null;
    type: string;
    /**
     * [RefundOrderItems]
     */
    historyRefundOrder: PrismaJson_RefundOrderItems | null;
    paymentGateId: number;
    note: string | null;
    total: number;
    id: string;
};
