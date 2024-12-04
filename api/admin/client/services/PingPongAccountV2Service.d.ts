import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { CreatePingPongAccountDto } from '../models/CreatePingPongAccountDto';
import type { UpdatePingPongAccountDto } from '../models/UpdatePingPongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PingPongAccountV2Service {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPingPongAccountV2({ requestBody, fulfillmentAgencyId, storeId, }: {
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
     * @returns string Ok
     * @throws ApiError
     */
    deletePingPongAccountV2({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateDefaultV2({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdatePingPongAccountDto;
    }): CancelablePromise<string>;
}
