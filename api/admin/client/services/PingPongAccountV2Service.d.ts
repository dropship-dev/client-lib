import type { BulkCreatePingpongAccountDto } from '../models/BulkCreatePingpongAccountDto';
import type { BulkDeletePingpongAccountDto } from '../models/BulkDeletePingpongAccountDto';
import type { BulkUpDatePingpongAccountDto } from '../models/BulkUpDatePingpongAccountDto';
import type { ResponseStoreAddPingpong } from '../models/ResponseStoreAddPingpong';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PingPongAccountV2Service {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    bulkCreatePingPongAccount({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: BulkCreatePingpongAccountDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    bulkUpdatePingPongAccount({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: BulkUpDatePingpongAccountDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    bulkDeletePingPongAccount({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: BulkDeletePingpongAccountDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getAllAccountPingpong({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<string>>;
    /**
     * @returns ResponseStoreAddPingpong Ok
     * @throws ApiError
     */
    getStoreAddPingpongAccount({ fulfillmentAgencyId, emailPingpong, }: {
        fulfillmentAgencyId: number;
        emailPingpong?: string;
    }): CancelablePromise<ResponseStoreAddPingpong>;
}
