import type { PrismaJson_RefundOrderItems } from './PrismaJson_RefundOrderItems';
/**
 * Model OrderRefund
 */
export type OrderRefund = {
    type: string;
    /**
     * [RefundOrderItems]
     */
    historyRefundOrder: PrismaJson_RefundOrderItems | null;
    paymentGateId: number;
    Notes: string | null;
    orderId: string | null;
    updatedAt: string;
    createdAt: string;
    total: number;
    id: string;
};