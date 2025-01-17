import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_FulfillmentPlatform } from '../models/_36_Enums_FulfillmentPlatform';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { DisconnectPaymentDto } from '../models/DisconnectPaymentDto';
import type { GeneratePartnerReferralsDto } from '../models/GeneratePartnerReferralsDto';
import type { IntegrationWithFulfillmentPlatformDto } from '../models/IntegrationWithFulfillmentPlatformDto';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { ReconnectPaymentDto } from '../models/ReconnectPaymentDto';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentAgencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllFulfillmentAgency({ userId, search, pageSize, nextPageIndex, }: {
        userId?: string;
        search?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            timezone: PrismaJson_Timezone;
            platformFee: number;
            type: _36_Enums_FulfillmentAgencyType;
            costCalculationMethod: _36_Enums_CostCalculationMethod;
            executionTime: string;
            status: _36_Enums_FulfillmentAgencyStatus;
            phone: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
            PaymentOnboarding: Array<{
                onboardingProducts: PrismaJson_OnboardingProducts;
                paypalPartnerReferralId: string;
                vettingRejectedAt: string;
                customCardProcessingStatus: _36_Enums_CapabilityStatus;
                PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
                oAuthIntegration: boolean;
                paymentReceivable: boolean;
                primaryEmailConfirmed: boolean;
                onboardingStatus: _36_Enums_OnboardingStatus;
                onboardingUrl: string;
                onboardingId: string;
                merchantEmail: string;
                merchantId: string;
                paymentType: _36_Enums_PaymentType;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                storeId: string;
                fulfillmentAgencyId: number;
                id: number;
            }>;
            Wallet: Array<{
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                storeId: string;
                fulfillmentAgencyId: number;
                balanceUnavailable: PrismaJson_UnavailableBalance;
                payoutAmount: number;
                holdAmount: number;
                balanceDebt: number;
                balanceAvailable: number;
                balanceAmount: number;
                walletName: string;
                id: string;
            }>;
            noProduct: number;
            noStore: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    generatePartnerReferrals({ requestBody, }: {
        requestBody: GeneratePartnerReferralsDto;
    }): CancelablePromise<{
        onboardingUrl: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPaymentOnboarding({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<{
        onboardingProducts: PrismaJson_OnboardingProducts;
        vettingRejectedAt: string;
        customCardProcessingStatus: _36_Enums_CapabilityStatus;
        PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
        oAuthIntegration: boolean;
        paymentReceivable: boolean;
        primaryEmailConfirmed: boolean;
        onboardingStatus: _36_Enums_OnboardingStatus;
        onboardingId: string;
        merchantEmail: string;
        merchantId: string;
        paymentType: _36_Enums_PaymentType;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
        paypalPartnerReferralId: string;
        onboardingUrl: string;
    }>;
    /**
     * @returns boolean Ok
     * @throws ApiError
     */
    getPermissionDisconnect({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<boolean>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentAgency({ id, }: {
        id: number;
    }): CancelablePromise<({
        PaymentOnboarding: Array<{
            onboardingProducts: PrismaJson_OnboardingProducts;
            paypalPartnerReferralId: string;
            vettingRejectedAt: string;
            customCardProcessingStatus: _36_Enums_CapabilityStatus;
            PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
            oAuthIntegration: boolean;
            paymentReceivable: boolean;
            primaryEmailConfirmed: boolean;
            onboardingStatus: _36_Enums_OnboardingStatus;
            onboardingUrl: string;
            onboardingId: string;
            merchantEmail: string;
            merchantId: string;
            paymentType: _36_Enums_PaymentType;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            fulfillmentAgencyId: number;
            id: number;
        }>;
        Wallet: Array<{
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            fulfillmentAgencyId: number;
            balanceUnavailable: PrismaJson_UnavailableBalance;
            payoutAmount: number;
            holdAmount: number;
            balanceDebt: number;
            balanceAvailable: number;
            balanceAmount: number;
            walletName: string;
            id: string;
        }>;
    } & {
        timezone: PrismaJson_Timezone;
        platformFee: number;
        type: _36_Enums_FulfillmentAgencyType;
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        executionTime: string;
        status: _36_Enums_FulfillmentAgencyStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateFulfillmentAgency({ id, requestBody, }: {
        id: number;
        requestBody: UpdateFulfillmentAgencyDto;
    }): CancelablePromise<{
        timezone: PrismaJson_Timezone;
        platformFee: number;
        type: _36_Enums_FulfillmentAgencyType;
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        executionTime: string;
        status: _36_Enums_FulfillmentAgencyStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteFulfillmentAgency({ id, }: {
        id: number;
    }): CancelablePromise<{
        timezone: PrismaJson_Timezone;
        platformFee: number;
        type: _36_Enums_FulfillmentAgencyType;
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        executionTime: string;
        status: _36_Enums_FulfillmentAgencyStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    verifyJoinPlatform({ id, paymentType, }: {
        id: number;
        paymentType: _36_Enums_PaymentType;
    }): CancelablePromise<{
        onboardingProducts: PrismaJson_OnboardingProducts;
        paypalPartnerReferralId: string;
        vettingRejectedAt: string;
        customCardProcessingStatus: _36_Enums_CapabilityStatus;
        PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
        oAuthIntegration: boolean;
        paymentReceivable: boolean;
        primaryEmailConfirmed: boolean;
        onboardingStatus: _36_Enums_OnboardingStatus;
        onboardingUrl: string;
        onboardingId: string;
        merchantEmail: string;
        merchantId: string;
        paymentType: _36_Enums_PaymentType;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreDebtPayment({ id, }: {
        id: number;
    }): CancelablePromise<Array<{
        name: string;
        Wallet: Array<{
            balanceDebt: number;
            id: string;
        }>;
        id: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentPlatformIntegration({ id, platform, }: {
        id: number;
        platform: _36_Enums_FulfillmentPlatform;
    }): CancelablePromise<{
        fulfillmentPlatformAPIKey: string;
        platform: 'BETTA_SUP';
        isLinked: boolean;
        apiKey: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    integrateWithFulfillmentPlatform({ id, requestBody, }: {
        id: number;
        requestBody: IntegrationWithFulfillmentPlatformDto;
    }): CancelablePromise<{
        fulfillmentPlatformAPIKey: string;
        platform: 'BETTA_SUP';
        isLinked: boolean;
        apiKey: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    disconnectPayment({ id, requestBody, }: {
        id: number;
        requestBody: DisconnectPaymentDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    reconnectPayment({ id, requestBody, }: {
        id: number;
        requestBody: ReconnectPaymentDto;
    }): CancelablePromise<{
        onboardingProducts: PrismaJson_OnboardingProducts;
        paypalPartnerReferralId: string;
        vettingRejectedAt: string;
        customCardProcessingStatus: _36_Enums_CapabilityStatus;
        PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
        oAuthIntegration: boolean;
        paymentReceivable: boolean;
        primaryEmailConfirmed: boolean;
        onboardingStatus: _36_Enums_OnboardingStatus;
        onboardingUrl: string;
        onboardingId: string;
        merchantEmail: string;
        merchantId: string;
        paymentType: _36_Enums_PaymentType;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
}
