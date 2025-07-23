import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PingPongAuthStatus } from '../models/_36_Enums_PingPongAuthStatus';
import type { ConnectWithPingPongAccountDto } from '../models/ConnectWithPingPongAccountDto';
import type { CreatePingPongAccountDto } from '../models/CreatePingPongAccountDto';
import type { SendOtpAddPingpongAccountDto } from '../models/SendOtpAddPingpongAccountDto';
import type { UpdatePingPongAccountDto } from '../models/UpdatePingPongAccountDto';
import type { VerifyOtpAddPingpongAccountDto } from '../models/VerifyOtpAddPingpongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PingPongAccountService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @deprecated
     * @returns any Ok
     * @throws ApiError
     */
    createPingPongAccount({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePingPongAccountDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPingPongAccount({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<{
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
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    connectWithPingPongAccount({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: ConnectWithPingPongAccountDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        email: string;
        loginURL: string;
        id: string;
    }>;
    /**
     * @deprecated
     * @returns string Ok
     * @throws ApiError
     */
    sentOtpAddPingpongAccount({ requestBody, }: {
        requestBody: SendOtpAddPingpongAccountDto;
    }): CancelablePromise<string>;
    /**
     * @deprecated
     * @returns any Ok
     * @throws ApiError
     */
    verifyOtpAddPingpongAccount({ requestBody, }: {
        requestBody: VerifyOtpAddPingpongAccountDto;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPingPongAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePingPongAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateDefault({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdatePingPongAccountDto;
    }): CancelablePromise<string>;
}
