import type { Transaction } from '../models/Transaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TransactionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreTransaction({ storeId, fulfillmentAgencyId, search, startDate, endDate, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<Transaction>;
    }>;
    /**
     * @returns Transaction Ok
     * @throws ApiError
     */
    getStoreTransaction({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<Transaction>;
}
