import type { UpdateOrderRefundHistoryDto } from './UpdateOrderRefundHistoryDto';
export type UpdateOrderRefundDto = {
    updateOrderRefundHistory: Array<UpdateOrderRefundHistoryDto>;
    notes?: string;
};
