import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PingPongAuthStatus } from '../models/_36_Enums_PingPongAuthStatus';
import type { ConnectWithPingPongAccountDto } from '../models/ConnectWithPingPongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PingPongAccountService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
}
