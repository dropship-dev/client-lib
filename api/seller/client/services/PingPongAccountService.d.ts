import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { CreatePingPongAccountDto } from '../models/CreatePingPongAccountDto';
import type { UpdatePingPongAccountDto } from '../models/UpdatePingPongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PingPongAccountService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPingPongAccount({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePingPongAccountDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
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
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
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
    getPingPongAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
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
