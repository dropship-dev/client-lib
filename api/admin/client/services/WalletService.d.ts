import type { _36_Enums_CurrencyType } from '../models/_36_Enums_CurrencyType';
import type { _36_Enums_PaymentMethodType } from '../models/_36_Enums_PaymentMethodType';
import type { _36_Enums_RequestPayoutStatus } from '../models/_36_Enums_RequestPayoutStatus';
import type { PrismaJson_bankInfo } from '../models/PrismaJson_bankInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { TopUpWalletDto } from '../models/TopUpWalletDto';
import type { WithdrawWalletDto } from '../models/WithdrawWalletDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class WalletService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getWallet({ id, fulfillmentAgencyId, storeId, }: {
        id: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<({
        bankAccount: Array<{
            walletId: string;
            isBlock: boolean;
            isDefault: boolean;
            bank: PrismaJson_bankInfo;
            accountHolder: string;
            accountNumber: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            id: string;
            currency: _36_Enums_CurrencyType;
        }>;
        remainingBalance: number;
        payableBalance: number;
        totalBalance: number;
    } | {
        balanceDebt: number;
        requestPayout: {
            payoutInToDate: string;
            payoutInFromDate: string;
            photos: PrismaJson_Photos;
            noteByAdmin: string;
            noteBySeller: string;
            convertCurrencyCode: string;
            pingPongAccountId: string;
            bankAccountId: string;
            paymentMethod: _36_Enums_PaymentMethodType;
            convertCurrencyAmount: number;
            requestCurrencyAmount: number;
            status: _36_Enums_RequestPayoutStatus;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: string;
        };
        payoutAmount: number;
        holdAmount: number;
        unavailableBalance: {
            bankAccount: Array<{
                walletId: string;
                isBlock: boolean;
                isDefault: boolean;
                bank: PrismaJson_bankInfo;
                accountHolder: string;
                accountNumber: string;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                id: string;
                currency: _36_Enums_CurrencyType;
            }>;
            availableSoon: number;
            hold: number;
        };
        availableBalance: number;
        totalBalance: number;
        id: string;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    withdrawToWallet({ id, fulfillmentAgencyId, requestBody, }: {
        id: string;
        fulfillmentAgencyId: number;
        requestBody: WithdrawWalletDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    topUpToWallet({ id, fulfillmentAgencyId, requestBody, }: {
        id: string;
        fulfillmentAgencyId: number;
        requestBody: TopUpWalletDto;
    }): CancelablePromise<string>;
}
