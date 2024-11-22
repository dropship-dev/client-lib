import type { PrismaJson_UpgradeSubscriptionPlan } from './PrismaJson_UpgradeSubscriptionPlan';
import type { SubscriptionInterval } from './SubscriptionInterval';
import type { SubscriptionType } from './SubscriptionType';
/**
 * Model Subscription
 */
export type Subscription = {
    updatedAt: string;
    createdAt: string;
    stripeSubscriptionStatus: string | null;
    stripeSubscriptionId: string | null;
    /**
     * [UpgradeSubscriptionPlan]
     */
    upgradeSubscriptionPlan: PrismaJson_UpgradeSubscriptionPlan | null;
    subscriptionPlanId: number | null;
    storeId: string;
    nextChargeDate: string | null;
    paymentRetry: number;
    freeTrialDays: number;
    interval: SubscriptionInterval | null;
    type: SubscriptionType;
    id: number;
};
