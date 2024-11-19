import type { BankAccount } from '../models/BankAccount';
import type { PaymentMethodType } from '../models/PaymentMethodType';
import type { PingPongAccount } from '../models/PingPongAccount';
import type { RequestPayout } from '../models/RequestPayout';
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
    getAllStoreTransaction({ storeId, fulfillmentAgencyId, search, startDate, endDate, pageSize, nextPageIndex, walletId, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        pageSize?: number;
        nextPageIndex?: string;
        walletId?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<(Transaction & {
            RequestPayout: {
                bankAccountId: string;
                convertCurrencyCode: string;
                convertCurrencyAmount: number;
                paymentMethod: PaymentMethodType;
                PingPongAccount: PingPongAccount;
                BankAccount: BankAccount;
                id: string;
            };
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreTransaction({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<(Transaction & {
        RequestPayout: RequestPayout;
    })>;
}
