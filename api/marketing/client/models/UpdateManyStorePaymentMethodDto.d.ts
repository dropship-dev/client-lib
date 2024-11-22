import type { PaymentType } from './PaymentType';
export type UpdateManyStorePaymentMethodDto = {
    paymentId: number;
    oldPaymentId: number;
    type: PaymentType;
    storeIds: Array<string>;
};
