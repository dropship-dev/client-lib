import type { BankAccount } from '../models/BankAccount';
import type { CreateBankAccountDto } from '../models/CreateBankAccountDto';
import type { UpdateBankAccountDto } from '../models/UpdateBankAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class BankAccountService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns BankAccount Ok
     * @throws ApiError
     */
    createBankAccount({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreateBankAccountDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<BankAccount>;
    /**
     * @returns BankAccount Ok
     * @throws ApiError
     */
    getAllBankAccount({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<BankAccount>>;
    /**
     * @returns BankAccount Ok
     * @throws ApiError
     */
    getBankAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<BankAccount>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteBankAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateDefault({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateBankAccountDto;
    }): CancelablePromise<void>;
}
