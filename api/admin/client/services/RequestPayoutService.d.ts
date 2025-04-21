import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PaymentMethodType } from '../models/_36_Enums_PaymentMethodType';
import type { _36_Enums_RequestPayoutStatus } from '../models/_36_Enums_RequestPayoutStatus';
import type { BankAccount } from '../models/BankAccount';
import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { PingPongAccount } from '../models/PingPongAccount';
import type { PrismaJson_bankInfo } from '../models/PrismaJson_bankInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
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
        data: Array<{
            payoutInToDate: string;
            payoutInFromDate: string;
            photos: PrismaJson_Photos;
            noteByAdmin: string;
            noteBySeller: string;
            convertCurrencyCode: string;
            paymentMethod: _36_Enums_PaymentMethodType;
            convertCurrencyAmount: number;
            requestCurrencyAmount: number;
            status: _36_Enums_RequestPayoutStatus;
            createdAt: string;
            storeId: string;
            id: string;
            PingPongAccount: {
                walletId: string;
                isBlock: boolean;
                isDefault: boolean;
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
                phone: string;
                email: string;
                name: string;
                id: string;
            };
        }>;
    }>;
    /**
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
            data: Array<{
                payoutInToDate: string;
                payoutInFromDate: string;
                photos: PrismaJson_Photos;
                noteByAdmin: string;
                noteBySeller: string;
                convertCurrencyCode: string;
                paymentMethod: _36_Enums_PaymentMethodType;
                convertCurrencyAmount: number;
                requestCurrencyAmount: number;
                status: _36_Enums_RequestPayoutStatus;
                createdAt: string;
                storeId: string;
                id: string;
                PingPongAccount: {
                    walletId: string;
                    isBlock: boolean;
                    isDefault: boolean;
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
                    phone: string;
                    email: string;
                    name: string;
                    id: string;
                };
            }>;
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
            data: Array<{
                payoutInToDate: string;
                payoutInFromDate: string;
                photos: PrismaJson_Photos;
                noteByAdmin: string;
                noteBySeller: string;
                convertCurrencyCode: string;
                paymentMethod: _36_Enums_PaymentMethodType;
                convertCurrencyAmount: number;
                requestCurrencyAmount: number;
                status: _36_Enums_RequestPayoutStatus;
                createdAt: string;
                storeId: string;
                id: string;
                PingPongAccount: {
                    walletId: string;
                    isBlock: boolean;
                    isDefault: boolean;
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
                    phone: string;
                    email: string;
                    name: string;
                    id: string;
                };
            }>;
        };
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
