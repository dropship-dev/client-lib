import type { BankAccount } from '../models/BankAccount';
import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { RequestPayout } from '../models/RequestPayout';
import type { RequestPayoutStatus } from '../models/RequestPayoutStatus';
import type { Store } from '../models/Store';
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
    getAllRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        statusRequest?: Array<RequestPayoutStatus>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<(RequestPayout & {
            BankAccount: BankAccount;
            Store: Store;
        })>;
        countStatusRequestPayout: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    countRequestPayout({ storeId, fulfillmentAgencyId, search, startDate, endDate, statusRequest, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        statusRequest?: Array<RequestPayoutStatus>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        countStatusRequestPayout: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRequestPayout({ storeId, id, }: {
        storeId: string;
        id: string;
    }): CancelablePromise<(RequestPayout & {
        BankAccount: BankAccount;
        Store: Store;
    })>;
    /**
     * @returns RequestPayout Ok
     * @throws ApiError
     */
    updateRequestPayout({ id, fulfillmentAgencyId, requestBody, }: {
        id: string;
        fulfillmentAgencyId: number;
        requestBody: UpdateRequestPayoutDto;
    }): CancelablePromise<RequestPayout>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    toolSyncBalanceAmountForSeller(): CancelablePromise<string>;
}
