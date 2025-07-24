import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentIntegrationType } from '../models/_36_Enums_PaymentIntegrationType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_TaxProviderOwner } from '../models/_36_Enums_TaxProviderOwner';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { ActivePaymentSSFFDto } from '../models/ActivePaymentSSFFDto';
import type { AddNewPaymentOnboardingV1Dto } from '../models/AddNewPaymentOnboardingV1Dto';
import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { CreatePaymentV1Dto } from '../models/CreatePaymentV1Dto';
import type { PaymentMethodIdDto } from '../models/PaymentMethodIdDto';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PaymentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    verifyJoinPlatformWithoutPayment({ storeId, merchantId, merchantIdInPayPal, }: {
        storeId: string;
        merchantId: string;
        merchantIdInPayPal: string;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listStorePaymentMethods({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        isPrimary: boolean;
        cardHolderName: string;
        cvcCheck: string;
        expireYear: number;
        expireMonth: number;
        last4: string;
        brand: string;
        id: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    retrieveClientSecret({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        clientSecret: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    setStoreDefaultPaymentMethod({ storeId, requestBody, }: {
        storeId: string;
        requestBody: PaymentMethodIdDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteStoreCard({ storeId, paymentMethodId, }: {
        storeId: string;
        paymentMethodId: string;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    addNewPaymentOnboarding({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: AddNewPaymentOnboardingV1Dto;
    }): CancelablePromise<{
        onboardingId: number;
        url: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    addNewPaymentOnboardingSsff({ storeId, requestBody, }: {
        storeId: string;
        requestBody: AddNewPaymentOnboardingV1Dto;
    }): CancelablePromise<{
        onboardingId: number;
        url: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPaymentV2({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<({
        onboardingId: number;
        url: string;
    } | {
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
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPayment({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePaymentV1Dto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<{
        creator: {
            role: _36_Enums_UserRole;
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        publishableKey: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
        PaymentOnboarding: {
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
        };
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPaymentV2({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        paymentOnboarding: Array<{
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
        payment: Array<({
            creator: {
                role: _36_Enums_UserRole;
                avatar: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: string;
            };
            isConnectPSSFF: boolean;
            isShowCompanyAddress: boolean;
            companyAddress: string;
            companyPhone: string;
            companyName: string;
            publishableKey: string;
            type: _36_Enums_PaymentType;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        } & {
            taxCount: number;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPaymentOnboarding({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<{
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
        vettingRejectedAt: string;
        onboardingStatus: _36_Enums_OnboardingStatus;
        merchantEmail: string;
        paymentType: _36_Enums_PaymentType;
        fulfillmentAgencyId: number;
        id: number;
        payment: {
            type: _36_Enums_PaymentType;
        };
        isDisconnect: boolean;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPaymentOnboarding({ fulfillmentAgencyId, onBoardingId, }: {
        fulfillmentAgencyId: number;
        onBoardingId: number;
    }): CancelablePromise<Array<{
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
        vettingRejectedAt: string;
        onboardingStatus: _36_Enums_OnboardingStatus;
        merchantEmail: string;
        paymentType: _36_Enums_PaymentType;
        fulfillmentAgencyId: number;
        payment: {
            type: _36_Enums_PaymentType;
        };
        isDisconnect: boolean;
        onboardingUrl: string;
    }>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePaymentOnboarding({ onBoardingId, fulfillmentAgencyId, storeId, }: {
        onBoardingId: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, fulfillmentAgencyId, storeId, }: {
        id: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        creator: {
            role: _36_Enums_UserRole;
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        publishableKey: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
        taxProviderConnectConfig: Array<{
            countryCode: string;
            id: number;
            TaxProvider: {
                owner: _36_Enums_TaxProviderOwner;
                name: string;
                id: number;
            };
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePayment({ id, requestBody, fulfillmentAgencyId, storeId, }: {
        id: number;
        requestBody: UpdatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<({
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
    } | {
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
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePayment({ id, fulfillmentAgencyId, storeId, }: {
        id: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    activePaymentSsff({ id, requestBody, }: {
        id: number;
        requestBody: ActivePaymentSSFFDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPaymentStores({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: number;
    }): CancelablePromise<{
        Store: Array<{
            primaryDomain: string;
            avatar: string;
            status: _36_Enums_StoreStatus;
            email: string;
            name: string;
            id: string;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    addPaymentToStores({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: number;
        requestBody: AddPaymentToStores;
    }): CancelablePromise<string>;
}
