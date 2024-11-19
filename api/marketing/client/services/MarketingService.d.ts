import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { GetListStoreMarketingDto } from '../models/GetListStoreMarketingDto';
import type { SendEmailToListStoreDto } from '../models/SendEmailToListStoreDto';
import type { StoreEmailLogStatus } from '../models/StoreEmailLogStatus';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MarketingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns User Ok
     * @throws ApiError
     */
    createMarketingAccount({ requestBody, }: {
        requestBody: CreateMarketingAccount;
    }): CancelablePromise<User>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListStoreMarketing({ requestBody, }: {
        requestBody: GetListStoreMarketingDto;
    }): CancelablePromise<{
        preCursor: boolean;
        nextCursor: string;
        data: Array<{
            status: StoreEmailLogStatus;
            name: string;
            id: string;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreEmailMarketingLog({ userId, }: {
        userId: string;
    }): CancelablePromise<Array<{
        emailId: string;
        EmailMarketingTemplate: {
            name: string;
        };
        createdAt: string;
        status: StoreEmailLogStatus;
        id: number;
    }>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    sendEmailToListStore({ requestBody, }: {
        requestBody: SendEmailToListStoreDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getEmailMarketingTemplate(): CancelablePromise<Array<{
        name: string;
        id: number;
        data: string;
    }>>;
}
