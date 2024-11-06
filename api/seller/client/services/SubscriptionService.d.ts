import type { PrismaJson_UpgradeSubscriptionPlan } from '../models/PrismaJson_UpgradeSubscriptionPlan';
import type { Subscription } from '../models/Subscription';
import type { SubscriptionInterval } from '../models/SubscriptionInterval';
import type { SubscriptionType } from '../models/SubscriptionType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SubscriptionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCurrentStoreSubscription({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        upgradeSubscriptionPlan: {
            startDate: string;
            interval: SubscriptionInterval;
            price: number;
            name: string;
        };
        subscriptionPlan: {
            endDate: string;
            startDate: string;
            daysLeftToRenewSubscription: number;
            interval: SubscriptionInterval;
            price: number;
            status: string;
            name: string;
        };
        freeTrial: {
            startDate: string;
            freeTrialDaysLeft: number;
        };
        type: SubscriptionType;
    }>;
    /**
     * @returns Subscription Ok
     * @throws ApiError
     */
    changeNextSubscriptionPlan({ storeId, requestBody, }: {
        storeId: string;
        requestBody: PrismaJson_UpgradeSubscriptionPlan;
    }): CancelablePromise<Subscription>;
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
}
