import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentUser } from '../models/FulfillmentUser';
import type { User } from '../models/User';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getUser(): CancelablePromise<(User & {
        FulfillmentUser: Array<(FulfillmentUser & {
            FulfillmentAgency: (FulfillmentAgency & {
                Wallet: Array<Wallet>;
            });
        })>;
    })>;
}
