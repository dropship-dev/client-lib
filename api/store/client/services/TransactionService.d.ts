import type { ConfirmPaypalOrderDto } from '../models/ConfirmPaypalOrderDto';
import type { CreatePaypalOrderDto } from '../models/CreatePaypalOrderDto';
import type { CreateTransactionDto } from '../models/CreateTransactionDto';
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
    createStoreTransaction({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateTransactionDto;
    }): CancelablePromise<Transaction>;
    /**
     * @returns Transaction Ok
     * @throws ApiError
     */
    createPaypalOrder({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: CreatePaypalOrderDto;
    }): CancelablePromise<Transaction>;
    /**
     * @returns Transaction Ok
     * @throws ApiError
     */
    confirmPaypalOrder({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: ConfirmPaypalOrderDto;
    }): CancelablePromise<Transaction>;
}
