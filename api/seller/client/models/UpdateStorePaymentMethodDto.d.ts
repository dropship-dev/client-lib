import type { PaymentType } from './PaymentType';
export type UpdateStorePaymentMethodDto = {
    paymentId: number;
    type: PaymentType;
};
