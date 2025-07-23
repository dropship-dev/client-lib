import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PaymentMethodType } from '../models/_36_Enums_PaymentMethodType';
import type { _36_Enums_PingPongAuthStatus } from '../models/_36_Enums_PingPongAuthStatus';
import type { _36_Enums_RequestPayoutStatus } from '../models/_36_Enums_RequestPayoutStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { BankAccount } from '../models/BankAccount';
import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { PingPongAccount } from '../models/PingPongAccount';
import type { PrismaJson_bankInfo } from '../models/PrismaJson_bankInfo';
import type { PrismaJson_HistoryRequestPayout } from '../models/PrismaJson_HistoryRequestPayout';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PingPongTransaction } from '../models/PrismaJson_PingPongTransaction';
import type { PrismaJson_PingPongTrialCalculation } from '../models/PrismaJson_PingPongTrialCalculation';
import type { PrismaJson_SettingPayoutRequestDay } from '../models/PrismaJson_SettingPayoutRequestDay';
import type { PrismaJson_SettingPayoutRequestTime } from '../models/PrismaJson_SettingPayoutRequestTime';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { RequestPayout } from '../models/RequestPayout';
import type { Store } from '../models/Store';
import type { UpdateRequestPayoutDto } from '../models/UpdateRequestPayoutDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestPayoutService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createRequestPayout({ requestBody, }: {
        requestBody: CreateRequestPayoutDto;
    }): CancelablePromise<{
        payoutInToDate: string;
        payoutInFromDate: string;
        fulfillmentAgencyPingPongAccountId: string;
        approverId: string;
        pingPongTransaction: PrismaJson_PingPongTransaction;
        pingPongTrailCalculation: PrismaJson_PingPongTrialCalculation;
        decidedAt: string;
        historyRequestPayout: PrismaJson_HistoryRequestPayout;
        photos: PrismaJson_Photos;
        noteByAdmin: string;
        noteBySeller: string;
        convertCurrencyCode: string;
        pingPongAccountId: string;
        bankAccountId: string;
        paymentMethod: _36_Enums_PaymentMethodType;
        convertCurrencyAmount: number;
        requestCurrencyAmount: number;
        status: _36_Enums_RequestPayoutStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        statusRequest?: Array<_36_Enums_RequestPayoutStatus>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<({
            PingPongAccount: {
                authStatus: _36_Enums_PingPongAuthStatus;
                pingPongClientId: string;
                walletId: string;
                isBlock: boolean;
                isDefault: boolean;
                userId: string;
                email: string;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                id: string;
                currency: _36_Enums_CurrencyType;
            };
            BankAccount: {
                walletId: string;
                isBlock: boolean;
                isDefault: boolean;
                bank: PrismaJson_bankInfo;
                accountHolder: string;
                accountNumber: string;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                id: string;
                currency: _36_Enums_CurrencyType;
            };
            Store: {
                isConversionRate: boolean;
                stripeDefaultPaymentMethodId: string;
                stripeCustomerId: string;
                warning: boolean;
                invitedDate: string;
                invitedById: number;
                currencyId: number;
                maxUsers: number;
                balance: number;
                referralCode: string;
                defaultBankAccount: string;
                shippingFeeAdditional: number;
                shippingFee: number;
                primaryDomain: string;
                subDomain: string;
                pageName: string;
                closedAt: string;
                country: string;
                zipCode: string;
                city: string;
                apartmentAddress: string;
                address: string;
                avatar: string;
                othersFee: number;
                shippingPolicy: string;
                termsOfService: string;
                refundPolicy: string;
                privacyPolicy: string;
                timezone: PrismaJson_Timezone;
                taxFeatureEnabled: boolean;
                type: _36_Enums_StoreType;
                status: _36_Enums_StoreStatus;
                phone: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                fulfillmentAgencyId: number;
                id: string;
            };
        } & {
            payoutInToDate: string;
            payoutInFromDate: string;
            fulfillmentAgencyPingPongAccountId: string;
            approverId: string;
            pingPongTransaction: PrismaJson_PingPongTransaction;
            pingPongTrailCalculation: PrismaJson_PingPongTrialCalculation;
            decidedAt: string;
            historyRequestPayout: PrismaJson_HistoryRequestPayout;
            photos: PrismaJson_Photos;
            noteByAdmin: string;
            noteBySeller: string;
            convertCurrencyCode: string;
            pingPongAccountId: string;
            bankAccountId: string;
            paymentMethod: _36_Enums_PaymentMethodType;
            convertCurrencyAmount: number;
            requestCurrencyAmount: number;
            status: _36_Enums_RequestPayoutStatus;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: string;
        })>;
        countStatusRequestPayout: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getOtpForPayoutRequest({ storeId, fulfillmentAgencyId, payoutRequestId, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        payoutRequestId?: string;
    }): CancelablePromise<string>;
    /**
     * @deprecated
     * @returns any Ok
     * @throws ApiError
     */
    getRequestPayoutV2({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        statusRequest?: Array<_36_Enums_RequestPayoutStatus>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        total: {
            countStatusRequestPayout: number;
        };
        data: {
            orderBy: string;
            nextPageIndex: string;
            prePageIndex: string;
            total: number;
            data: Array<({
                PingPongAccount: {
                    authStatus: _36_Enums_PingPongAuthStatus;
                    pingPongClientId: string;
                    walletId: string;
                    isBlock: boolean;
                    isDefault: boolean;
                    userId: string;
                    email: string;
                    updatedAt: string;
                    createdAt: string;
                    isDeleted: boolean;
                    id: string;
                    currency: _36_Enums_CurrencyType;
                };
                BankAccount: {
                    walletId: string;
                    isBlock: boolean;
                    isDefault: boolean;
                    bank: PrismaJson_bankInfo;
                    accountHolder: string;
                    accountNumber: string;
                    updatedAt: string;
                    createdAt: string;
                    isDeleted: boolean;
                    id: string;
                    currency: _36_Enums_CurrencyType;
                };
                Store: {
                    isConversionRate: boolean;
                    stripeDefaultPaymentMethodId: string;
                    stripeCustomerId: string;
                    warning: boolean;
                    invitedDate: string;
                    invitedById: number;
                    currencyId: number;
                    maxUsers: number;
                    balance: number;
                    referralCode: string;
                    defaultBankAccount: string;
                    shippingFeeAdditional: number;
                    shippingFee: number;
                    primaryDomain: string;
                    subDomain: string;
                    pageName: string;
                    closedAt: string;
                    country: string;
                    zipCode: string;
                    city: string;
                    apartmentAddress: string;
                    address: string;
                    avatar: string;
                    othersFee: number;
                    shippingPolicy: string;
                    termsOfService: string;
                    refundPolicy: string;
                    privacyPolicy: string;
                    timezone: PrismaJson_Timezone;
                    taxFeatureEnabled: boolean;
                    type: _36_Enums_StoreType;
                    status: _36_Enums_StoreStatus;
                    phone: string;
                    email: string;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    isDeleted: boolean;
                    fulfillmentAgencyId: number;
                    id: string;
                };
            } & {
                payoutInToDate: string;
                payoutInFromDate: string;
                fulfillmentAgencyPingPongAccountId: string;
                approverId: string;
                pingPongTransaction: PrismaJson_PingPongTransaction;
                pingPongTrailCalculation: PrismaJson_PingPongTrialCalculation;
                decidedAt: string;
                historyRequestPayout: PrismaJson_HistoryRequestPayout;
                photos: PrismaJson_Photos;
                noteByAdmin: string;
                noteBySeller: string;
                convertCurrencyCode: string;
                pingPongAccountId: string;
                bankAccountId: string;
                paymentMethod: _36_Enums_PaymentMethodType;
                convertCurrencyAmount: number;
                requestCurrencyAmount: number;
                status: _36_Enums_RequestPayoutStatus;
                updatedAt: string;
                createdAt: string;
                storeId: string;
                id: string;
            })>;
            countStatusRequestPayout: number;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRequestHistory({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        statusRequest?: Array<_36_Enums_RequestPayoutStatus>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        total: {
            countStatusRequestPayout: number;
        };
        data: {
            orderBy: string;
            nextPageIndex: string;
            prePageIndex: string;
            total: number;
            data: Array<({
                PingPongAccount: {
                    authStatus: _36_Enums_PingPongAuthStatus;
                    pingPongClientId: string;
                    walletId: string;
                    isBlock: boolean;
                    isDefault: boolean;
                    userId: string;
                    email: string;
                    updatedAt: string;
                    createdAt: string;
                    isDeleted: boolean;
                    id: string;
                    currency: _36_Enums_CurrencyType;
                };
                BankAccount: {
                    walletId: string;
                    isBlock: boolean;
                    isDefault: boolean;
                    bank: PrismaJson_bankInfo;
                    accountHolder: string;
                    accountNumber: string;
                    updatedAt: string;
                    createdAt: string;
                    isDeleted: boolean;
                    id: string;
                    currency: _36_Enums_CurrencyType;
                };
                Store: {
                    isConversionRate: boolean;
                    stripeDefaultPaymentMethodId: string;
                    stripeCustomerId: string;
                    warning: boolean;
                    invitedDate: string;
                    invitedById: number;
                    currencyId: number;
                    maxUsers: number;
                    balance: number;
                    referralCode: string;
                    defaultBankAccount: string;
                    shippingFeeAdditional: number;
                    shippingFee: number;
                    primaryDomain: string;
                    subDomain: string;
                    pageName: string;
                    closedAt: string;
                    country: string;
                    zipCode: string;
                    city: string;
                    apartmentAddress: string;
                    address: string;
                    avatar: string;
                    othersFee: number;
                    shippingPolicy: string;
                    termsOfService: string;
                    refundPolicy: string;
                    privacyPolicy: string;
                    timezone: PrismaJson_Timezone;
                    taxFeatureEnabled: boolean;
                    type: _36_Enums_StoreType;
                    status: _36_Enums_StoreStatus;
                    phone: string;
                    email: string;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    isDeleted: boolean;
                    fulfillmentAgencyId: number;
                    id: string;
                };
            } & {
                payoutInToDate: string;
                payoutInFromDate: string;
                fulfillmentAgencyPingPongAccountId: string;
                approverId: string;
                pingPongTransaction: PrismaJson_PingPongTransaction;
                pingPongTrailCalculation: PrismaJson_PingPongTrialCalculation;
                decidedAt: string;
                historyRequestPayout: PrismaJson_HistoryRequestPayout;
                photos: PrismaJson_Photos;
                noteByAdmin: string;
                noteBySeller: string;
                convertCurrencyCode: string;
                pingPongAccountId: string;
                bankAccountId: string;
                paymentMethod: _36_Enums_PaymentMethodType;
                convertCurrencyAmount: number;
                requestCurrencyAmount: number;
                status: _36_Enums_RequestPayoutStatus;
                updatedAt: string;
                createdAt: string;
                storeId: string;
                id: string;
            })>;
            countStatusRequestPayout: number;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    waringRequest({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        receiverRequestDay: PrismaJson_SettingPayoutRequestDay;
        receiverRequestTime: PrismaJson_SettingPayoutRequestTime;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    countRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        statusRequest?: Array<_36_Enums_RequestPayoutStatus>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        countStatusRequestPayout: number;
    }>;
    /**
     * @returns number Ok
     * @throws ApiError
     */
    getAmountRequestByStatus({ statusRequestPayout, fulfillmentAgencyId, }: {
        statusRequestPayout: Array<_36_Enums_RequestPayoutStatus>;
        fulfillmentAgencyId: number;
    }): CancelablePromise<number>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatusCreateRequestPayout({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        status: 'REQUESTING' | 'REVIEW';
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    previewRequestPayout({ id, fulfillmentAgencyId, pingPongId, }: {
        id: string;
        fulfillmentAgencyId: number;
        pingPongId: string;
    }): CancelablePromise<{
        balanceEnough: boolean;
        trialExpireTime: number;
        fee: number;
        amount: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRequestPayout({ storeId, id, }: {
        storeId: string;
        id: string;
    }): CancelablePromise<(RequestPayout & {
        Store: Store | null;
        PingPongAccount: PingPongAccount | null;
        BankAccount: BankAccount | null;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateRequestPayout({ id, fulfillmentAgencyId, requestBody, }: {
        id: string;
        fulfillmentAgencyId: number;
        requestBody: UpdateRequestPayoutDto;
    }): CancelablePromise<{
        payoutInToDate: string;
        payoutInFromDate: string;
        fulfillmentAgencyPingPongAccountId: string;
        approverId: string;
        pingPongTransaction: PrismaJson_PingPongTransaction;
        pingPongTrailCalculation: PrismaJson_PingPongTrialCalculation;
        decidedAt: string;
        historyRequestPayout: PrismaJson_HistoryRequestPayout;
        photos: PrismaJson_Photos;
        noteByAdmin: string;
        noteBySeller: string;
        convertCurrencyCode: string;
        pingPongAccountId: string;
        bankAccountId: string;
        paymentMethod: _36_Enums_PaymentMethodType;
        convertCurrencyAmount: number;
        requestCurrencyAmount: number;
        status: _36_Enums_RequestPayoutStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    toolSyncBalanceAmountForSeller(): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    changeToRequesting({ id, fulfillmentAgencyId, }: {
        id: string;
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns number Ok
     * @throws ApiError
     */
    getAllAmountRequestingStatus({ statusRequestPayout, fulfillmentAgencyId, }: {
        statusRequestPayout: _36_Enums_RequestPayoutStatus;
        fulfillmentAgencyId: number;
    }): CancelablePromise<number>;
}
