import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentIntegrationType } from '../models/_36_Enums_PaymentIntegrationType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { CreateFulfillmentAgencyDto } from '../models/CreateFulfillmentAgencyDto';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { UpdateFulfillmentAgencyStatusDto } from '../models/UpdateFulfillmentAgencyStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentAgencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createFulfillmentAgency({ requestBody, }: {
        requestBody: CreateFulfillmentAgencyDto;
    }): CancelablePromise<({
        Payment: Array<{
            PaymentIntegrationType: _36_Enums_PaymentIntegrationType;
            isConnectPSSFF: boolean;
            environment: _36_Enums_EnvironmentType;
            UIVersion: number;
            deleted: boolean;
            BNcode: string;
            partnerId: string;
            gatewayUrl: string;
            tokenExpiredAt: string;
            token: string;
            isPlatform: boolean;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            merchantId: string;
            salt: string;
            secretKey: string;
            publishableKey: string;
            userId: string;
            type: _36_Enums_PaymentType;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
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
    updateFulfillmentAgencyStatus({ id, requestBody, }: {
        id: number;
        requestBody: UpdateFulfillmentAgencyStatusDto;
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
}
