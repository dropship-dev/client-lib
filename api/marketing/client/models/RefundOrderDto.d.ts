import type { RefundType } from './RefundType';
export type RefundOrderDto = {
    infoOrderRefund?: Array<{
        quantity: number;
        idOrderItem: string;
    }>;
    note: string;
    amount: number;
    typeRefund: RefundType;
};
