import type { SearchBettaSupSellersResponse } from '../models/SearchBettaSupSellersResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentPlatformIntegrationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns SearchBettaSupSellersResponse Ok
     * @throws ApiError
     */
    searchSellersOnBettaSup({ cursor, pageSize, email, }: {
        cursor?: string;
        pageSize?: number;
        email?: string;
    }): CancelablePromise<SearchBettaSupSellersResponse>;
}
