import type { PaymentType } from './PaymentType';
export type CreatePaymentDto = {
    type: PaymentType;
    email: string;
};
