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
import type { GetStoreReportResultDto } from '../models/GetStoreReportResultDto';
import type { IntegrationWithFulfillmentPlatformDto } from '../models/IntegrationWithFulfillmentPlatformDto';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
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
            taxFeatureEnabled: boolean;
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
            PaymentOnboarding: Array<{
                paymentId: number;
                dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
        onboardingId: number;
        onboardingUrl: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPaymentOnboarding({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<{
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
        PaymentOnboarding: Array<{
            paymentId: number;
            dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
    } & {
        timezone: PrismaJson_Timezone;
        taxFeatureEnabled: boolean;
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
        taxFeatureEnabled: boolean;
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
        taxFeatureEnabled: boolean;
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
    verifyJoinPlatform({ id, paymentType, onBoardingPaymentId, }: {
        id: number;
        paymentType: _36_Enums_PaymentType;
        onBoardingPaymentId: number;
    }): CancelablePromise<{
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
    verifyJoinPlatformV2({ paymentType, onBoardingPaymentId, }: {
        paymentType: _36_Enums_PaymentType;
        onBoardingPaymentId: number;
    }): CancelablePromise<{
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
        id: string;
        Wallet: Array<{
            balanceDebt: number;
            id: string;
        }>;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentPlatformIntegration({ id, platform, }: {
        id: number;
        platform: _36_Enums_FulfillmentPlatform;
    }): CancelablePromise<{
        lastRequestedAt: any;
        supplierEmail: any;
        status: any;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    integrateWithFulfillmentPlatform({ id, requestBody, }: {
        id: number;
        requestBody: IntegrationWithFulfillmentPlatformDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    checkUnfulfilledOrdersFromFulfillmentPlatform({ id, platform, }: {
        id: number;
        platform: _36_Enums_FulfillmentPlatform;
    }): CancelablePromise<{
        unfulfilledOrders: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    changeFulfillmentPlatformSeller({ id, requestBody, }: {
        id: number;
        requestBody: IntegrationWithFulfillmentPlatformDto;
    }): CancelablePromise<string>;
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
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
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
     * @returns GetStoreReportResultDto Ok
     * @throws ApiError
     */
    getStoreReport({ id, pageSize, nextPageIndex, startDate, endDate, search, }: {
        id: number;
        pageSize?: number;
        nextPageIndex?: string;
        startDate?: string;
        endDate?: string;
        search?: string;
    }): CancelablePromise<GetStoreReportResultDto>;
}
