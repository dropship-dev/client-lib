import type { _36_Enums_SubscriptionInterval } from './_36_Enums_SubscriptionInterval';
export type PayPlatformTransactionFeeDto = {
    platformFee: number;
    subscriptionPlan?: {
        interval: _36_Enums_SubscriptionInterval;
        id: number;
    } | null;
    paymentMethodId: string;
};
