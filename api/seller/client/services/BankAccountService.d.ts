import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { CreateBankAccountDto } from '../models/CreateBankAccountDto';
import type { PrismaJson_bankInfo } from '../models/PrismaJson_bankInfo';
import type { UpdateBankAccountDto } from '../models/UpdateBankAccountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class BankAccountService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createBankAccount({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreateBankAccountDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
        bank: PrismaJson_bankInfo;
        currency: _36_Enums_CurrencyType;
        accountHolder: string;
        accountNumber: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllBankAccount({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<{
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
        bank: PrismaJson_bankInfo;
        currency: _36_Enums_CurrencyType;
        accountHolder: string;
        accountNumber: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getBankAccount({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        walletId: string;
        isBlock: boolean;
        isDefault: boolean;
        bank: PrismaJson_bankInfo;
        currency: _36_Enums_CurrencyType;
        accountHolder: string;
        accountNumber: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: string;
    }>;
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
     * @returns string Ok
     * @throws ApiError
     */
    updateDefault({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateBankAccountDto;
    }): CancelablePromise<string>;
}
