import type { CostCalculationMethod } from '../models/CostCalculationMethod';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentAgencyStatus } from '../models/FulfillmentAgencyStatus';
import type { Timezone } from '../models/Timezone';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentAgencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllFulfillmentAgency({ userId, search, pageSize, nextPageIndex, }: {
        userId?: string;
        search?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            updatedAt: string;
            createdAt: string;
            timezone: Timezone;
            costCalculationMethod: CostCalculationMethod;
            executionTime: string;
            status: FulfillmentAgencyStatus;
            phone: string;
            email: string;
            name: string;
            id: number;
            noProduct: number;
            noStore: number;
        }>;
    }>;
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
