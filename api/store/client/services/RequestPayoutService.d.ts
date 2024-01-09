import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { RequestPayout } from '../models/RequestPayout';
import type { UpdateRequestPayoutDto } from '../models/UpdateRequestPayoutDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestPayoutService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns RequestPayout Ok
     * @throws ApiError
     */
    createRequestPayout({ requestBody, }: {
        requestBody: CreateRequestPayoutDto;
    }): CancelablePromise<RequestPayout>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRequestPayout(): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<RequestPayout>;
    }>;
    /**
     * @returns RequestPayout Ok
     * @throws ApiError
     */
    getRequestPayout({ storeId, id, }: {
        storeId: string;
        id: string;
    }): CancelablePromise<RequestPayout>;
    /**
     * @returns RequestPayout Ok
     * @throws ApiError
     */
    updateRequestPayout({ id, fulfillmentAgencyId, requestBody, }: {
        id: string;
        fulfillmentAgencyId: number;
        requestBody: UpdateRequestPayoutDto;
    }): CancelablePromise<RequestPayout>;
}
