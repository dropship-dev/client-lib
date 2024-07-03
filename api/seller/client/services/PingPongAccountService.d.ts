import type { CreatePingPongAccountDto } from '../models/CreatePingPongAccountDto';
import type { PingPongAccount } from '../models/PingPongAccount';
import type { UpdatePingPongAccountDto } from '../models/UpdatePingPongAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PingPongAccountService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns PingPongAccount Ok
     * @throws ApiError
     */
    createPingPongAccount({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePingPongAccountDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<PingPongAccount>;
    /**
     * @returns PingPongAccount Ok
     * @throws ApiError
     */
    getAllPingPongAccount({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<PingPongAccount>>;
    /**
     * @returns PingPongAccount Ok
     * @throws ApiError
     */
    getPingPongAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<PingPongAccount>;
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
