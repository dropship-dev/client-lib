import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
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
        nextPageIndex: (number | string | TransactionType | TransactionStatus);
        total: number;
        data: Array<GetResult_any_any_any_>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTransaction({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
