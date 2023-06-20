import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { TransactionType } from '../models/TransactionType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TransactionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTransaction({ storeId, }: {
        storeId: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (number | string | TransactionStatus | TransactionType);
        total: number;
        data: Array<Transaction>;
    }>;
    /**
     * @returns Transaction Ok
     * @throws ApiError
     */
    getTransaction({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<Transaction>;
}
