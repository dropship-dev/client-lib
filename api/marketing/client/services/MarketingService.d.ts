import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { GetListStoreMarketingDto } from '../models/GetListStoreMarketingDto';
import type { SendEmailToListStoreDto } from '../models/SendEmailToListStoreDto';
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
        nextCursor: string;
        data: Array<{
            email: string;
            name: string;
            id: string;
            revenue: number;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    sendEmailToListStore({ requestBody, }: {
        requestBody: SendEmailToListStoreDto;
    }): CancelablePromise<string>;
}
