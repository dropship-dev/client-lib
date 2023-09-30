import type { CreateFulfillmentAgencyDto } from '../models/CreateFulfillmentAgencyDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentAgencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    createFulfillmentAgency({ requestBody, }: {
        requestBody: CreateFulfillmentAgencyDto;
    }): CancelablePromise<FulfillmentAgency>;
    /**
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    getAllFulfillmentAgency({ userId, }: {
        userId?: string;
    }): CancelablePromise<Array<FulfillmentAgency>>;
    /**
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    getFulfillmentAgency({ id, }: {
        id: number;
    }): CancelablePromise<FulfillmentAgency>;
    /**
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    updateFulfillmentAgency({ id, requestBody, }: {
        id: number;
        requestBody: UpdateFulfillmentAgencyDto;
    }): CancelablePromise<FulfillmentAgency>;
    /**
     * @returns FulfillmentAgency Ok
     * @throws ApiError
     */
    deleteFulfillmentAgency({ id, }: {
        id: number;
    }): CancelablePromise<FulfillmentAgency>;
}
