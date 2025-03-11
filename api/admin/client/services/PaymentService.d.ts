import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentIntegrationType } from '../models/_36_Enums_PaymentIntegrationType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PaymentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPayment({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<({
        PaymentIntegrationType: _36_Enums_PaymentIntegrationType;
        salt: string;
        environment: _36_Enums_EnvironmentType;
        UIVersion: number;
        deleted: boolean;
        BNcode: string;
        partnerId: string;
        gatewayUrl: string;
        tokenExpiredAt: string;
        token: string;
        secretKey: string;
        publishableKey: string;
        isPlatform: boolean;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        merchantId: string;
        userId: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    } | {
        onboardingId: number;
        url: string;
    })>;
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
        publishableKey: string;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
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
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPaymentOnboarding({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<{
        payment: {
            type: _36_Enums_PaymentType;
        };
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
        vettingRejectedAt: string;
        onboardingStatus: _36_Enums_OnboardingStatus;
        merchantEmail: string;
        paymentType: _36_Enums_PaymentType;
        fulfillmentAgencyId: number;
        id: number;
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
        payment: {
            type: _36_Enums_PaymentType;
        };
        paymentId: number;
        dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
        vettingRejectedAt: string;
        onboardingStatus: _36_Enums_OnboardingStatus;
        merchantEmail: string;
        paymentType: _36_Enums_PaymentType;
        fulfillmentAgencyId: number;
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
        publishableKey: string;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        type: _36_Enums_PaymentType;
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
    updatePayment({ id, requestBody, fulfillmentAgencyId, storeId, }: {
        id: number;
        requestBody: UpdatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        PaymentIntegrationType: _36_Enums_PaymentIntegrationType;
        salt: string;
        environment: _36_Enums_EnvironmentType;
        UIVersion: number;
        deleted: boolean;
        BNcode: string;
        partnerId: string;
        gatewayUrl: string;
        tokenExpiredAt: string;
        token: string;
        secretKey: string;
        publishableKey: string;
        isPlatform: boolean;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        merchantId: string;
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
     * @returns string Ok
     * @throws ApiError
     */
    deletePayment({ id, fulfillmentAgencyId, storeId, }: {
        id: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
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
