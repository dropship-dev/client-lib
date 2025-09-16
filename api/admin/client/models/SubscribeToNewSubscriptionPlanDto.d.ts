import type { _36_Enums_SubscriptionInterval } from './_36_Enums_SubscriptionInterval';
export type SubscribeToNewSubscriptionPlanDto = {
    subscriptionPlan: {
        interval: _36_Enums_SubscriptionInterval;
        id: number;
    };
    paymentMethodId: string;
};
