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
    getAllStoreTransaction({ storeId, pageSize, nextPageIndex, }: {
        storeId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<Transaction>;
    }>;
    /**
     * @returns Transaction Ok
     * @throws ApiError
     */
    getStoreTransaction({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<Transaction>;
}
