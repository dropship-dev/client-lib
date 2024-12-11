import type { _36_Enums_SubscriptionInterval } from '../models/_36_Enums_SubscriptionInterval';
import type { _36_Enums_SubscriptionType } from '../models/_36_Enums_SubscriptionType';
import type { PrismaJson_UpgradeSubscriptionPlan } from '../models/PrismaJson_UpgradeSubscriptionPlan';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SubscriptionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listSubscriptionPlans(): CancelablePromise<{
        features: Array<{
            availablePlans: Array<boolean>;
            description: string;
            name: string;
        }>;
        plans: Array<{
            platformTransactionFee: number;
            yearlyPrice: number;
            monthlyPrice: number;
            description: string;
            name: string;
            id: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCurrentStoreSubscription({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        upgradeSubscriptionPlan: {
            startDate: string;
            interval: _36_Enums_SubscriptionInterval;
            price: number;
            name: string;
        };
        subscriptionPlan: {
            nextChargeDate: string;
            endDate: string;
            startDate: string;
            daysLeftToRenewSubscription: number;
            interval: _36_Enums_SubscriptionInterval;
            price: number;
            status: string;
            name: string;
        };
        freeTrial: {
            startDate: string;
            freeTrialDaysLeft: number;
        };
        type: _36_Enums_SubscriptionType;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    changeNextSubscriptionPlan({ storeId, requestBody, }: {
        storeId: string;
        requestBody: PrismaJson_UpgradeSubscriptionPlan;
    }): CancelablePromise<{
        stripeSubscriptionStatus: string;
        stripeSubscriptionId: string;
        upgradeSubscriptionPlan: PrismaJson_UpgradeSubscriptionPlan;
        subscriptionPlanId: number;
        lastPlatformFeeChargeAt: string;
        currentPlatformTransactionFee: number;
        nextChargeDate: string;
        paymentRetry: number;
        freeTrialDays: number;
        interval: _36_Enums_SubscriptionInterval;
        type: _36_Enums_SubscriptionType;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
}
