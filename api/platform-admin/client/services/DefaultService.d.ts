import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns User Ok
     * @throws ApiError
     */
    createMarketingAccount({ requestBody, }: {
        requestBody: CreateMarketingAccount;
    }): CancelablePromise<User>;
}
