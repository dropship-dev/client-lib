import type { CreateSubscriptionFeatureDto } from '../models/CreateSubscriptionFeatureDto';
import type { CreateSubscriptionPlanDto } from '../models/CreateSubscriptionPlanDto';
import type { Partial_CreateSubscriptionFeatureDto_ } from '../models/Partial_CreateSubscriptionFeatureDto_';
import type { SubscriptionFeature } from '../models/SubscriptionFeature';
import type { SubscriptionPlan } from '../models/SubscriptionPlan';
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
     * @returns SubscriptionPlan Ok
     * @throws ApiError
     */
    createSubscriptionPlan({ requestBody, }: {
        requestBody: CreateSubscriptionPlanDto;
    }): CancelablePromise<SubscriptionPlan>;
    /**
     * @returns SubscriptionFeature Ok
     * @throws ApiError
     */
    listSubscriptionFeatures(): CancelablePromise<Array<SubscriptionFeature>>;
    /**
     * @returns SubscriptionFeature Ok
     * @throws ApiError
     */
    createSubscriptionFeature({ requestBody, }: {
        requestBody: CreateSubscriptionFeatureDto;
    }): CancelablePromise<SubscriptionFeature>;
    /**
     * @returns void
     * @throws ApiError
     */
    getSubscriptionPlan({ id, }: {
        id: number;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateSubscriptionPlan({ id, }: {
        id: number;
    }): CancelablePromise<void>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    seedSubscriptionPlans(): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    apply14DayFreeTrialForExistedStores({ requestBody, }: {
        requestBody: {
            storeIds: Array<string>;
        };
    }): CancelablePromise<string>;
    /**
     * @returns SubscriptionFeature Ok
     * @throws ApiError
     */
    updateSubscriptionFeature({ id, requestBody, }: {
        id: number;
        requestBody: Partial_CreateSubscriptionFeatureDto_;
    }): CancelablePromise<SubscriptionFeature>;
    /**
     * @returns void
     * @throws ApiError
     */
    deleteSubscriptionFeature({ id, }: {
        id: number;
    }): CancelablePromise<void>;
}
