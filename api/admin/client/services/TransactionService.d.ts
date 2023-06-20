import type { Transaction } from '../models/Transaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TransactionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Transaction Ok
     * @throws ApiError
     */
    getTransaction({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<Transaction>;
}
