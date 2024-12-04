import type { PaymentInfo } from './PaymentInfo';
export type RenewDomainDto = {
    autoRenew?: boolean;
    paymentMethod?: PaymentInfo;
};
