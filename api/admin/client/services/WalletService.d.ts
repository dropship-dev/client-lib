import type { BankAccount } from '../models/BankAccount';
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
        bankAccount: Array<BankAccount>;
        remainingBalance: number;
        payableBalance: number;
        totalBalance: number;
    } | {
        unavailableBalance: {
            bankAccount: Array<BankAccount>;
            availableSoon: number;
            hold: number;
        };
        availableBalance: number;
        totalBalance: number;
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
