import type { ConfirmPaypalOrderDto } from '../models/ConfirmPaypalOrderDto';
import type { CreatePaypalOrderDto } from '../models/CreatePaypalOrderDto';
import type { CreateTransactionDto } from '../models/CreateTransactionDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TransactionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTransaction({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateTransactionDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPaypalOrder({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: CreatePaypalOrderDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    confirmPaypalOrder({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: ConfirmPaypalOrderDto;
    }): CancelablePromise<GetResult_any_any_any_>;
}
