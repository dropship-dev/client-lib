import type { _36_Enums_SubscriptionInterval } from '../models/_36_Enums_SubscriptionInterval';
import type { _36_Enums_SubscriptionStatus } from '../models/_36_Enums_SubscriptionStatus';
import type { _36_Enums_SubscriptionType } from '../models/_36_Enums_SubscriptionType';
import type { PayPlatformTransactionFeeDebtDto } from '../models/PayPlatformTransactionFeeDebtDto';
import type { PayPlatformTransactionFeeDto } from '../models/PayPlatformTransactionFeeDto';
import type { PaySubscriptionInvoiceDto } from '../models/PaySubscriptionInvoiceDto';
import type { PrismaJson_UpgradeSubscriptionPlan } from '../models/PrismaJson_UpgradeSubscriptionPlan';
import type { SubscribeToNewSubscriptionPlanDto } from '../models/SubscribeToNewSubscriptionPlanDto';
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
        startedAt: string;
        failedPTFCaptureTimes: number;
        needToPayPTF: boolean;
        upgradeSubscriptionPlan: {
            startDate: string;
            interval: _36_Enums_SubscriptionInterval;
            price: number;
            name: string;
            id: number;
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
            id: number;
        };
        freeTrial: {
            endDate: string;
            freeTrialDaysLeft: number;
        };
        status: _36_Enums_SubscriptionStatus;
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
        passRevenueCeiling: boolean;
        failedPTFCaptureTimes: number;
        lastPlatformFeeChargeAt: string;
        currentPlatformTransactionFee: number;
        nextChargeDate: string;
        paymentRetry: number;
        freeTrialDays: number;
        interval: _36_Enums_SubscriptionInterval;
        type: _36_Enums_SubscriptionType;
        status: _36_Enums_SubscriptionStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStorePlatformTransactionFee({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        currentPlanTransactionFeePercent: number;
        totalPlatformFee: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    paySubscriptionAndPlatformTransactionFees({ storeId, requestBody, }: {
        storeId: string;
        requestBody: PayPlatformTransactionFeeDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCurrentStoreRevenueAndPtf({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        currentPlanTransactionFeePercent: number;
        platformRevenueCeiling: number;
        totalPlatformFee: number;
        storeRevenue: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSubscriptionAndPlatformTransactionFeeDebt({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        totalPlatformFee: number;
        subscriptionPlan: {
            name: string;
        };
        subscriptionFee: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    paySubscriptionAndPlatformTransactionFeesDebt({ storeId, requestBody, }: {
        storeId: string;
        requestBody: PayPlatformTransactionFeeDebtDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    paySubscriptionInvoice({ storeId, requestBody, }: {
        storeId: string;
        requestBody: PaySubscriptionInvoiceDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    subscribeToANewSubscriptionPlan({ storeId, requestBody, }: {
        storeId: string;
        requestBody: SubscribeToNewSubscriptionPlanDto;
    }): CancelablePromise<string>;
}
