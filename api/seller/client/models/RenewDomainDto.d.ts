import type { StripeCardPaymentInfo } from './StripeCardPaymentInfo';
export type RenewDomainDto = {
    autoRenew?: boolean;
    paymentMethod?: StripeCardPaymentInfo;
};
