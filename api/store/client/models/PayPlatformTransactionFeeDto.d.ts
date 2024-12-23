import type { _36_Enums_SubscriptionInterval } from './_36_Enums_SubscriptionInterval';
import type { StripeCardPaymentInfo } from './StripeCardPaymentInfo';
export type PayPlatformTransactionFeeDto = {
    platformFee: number;
    subscriptionPlan?: {
        interval: _36_Enums_SubscriptionInterval;
        id: number;
    };
    paymentInfo: StripeCardPaymentInfo;
};
