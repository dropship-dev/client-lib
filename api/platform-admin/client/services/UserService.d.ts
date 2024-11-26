import type { ChangeUserPasswordDto } from '../models/ChangeUserPasswordDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentUser } from '../models/FulfillmentUser';
import type { PaymentOnboarding } from '../models/PaymentOnboarding';
import type { UpdateUserDto } from '../models/UpdateUserDto';
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
                PaymentOnboarding: Array<PaymentOnboarding>;
            });
        })>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateUser({ requestBody, }: {
        requestBody: UpdateUserDto;
    }): CancelablePromise<(User & {
        FulfillmentUser: Array<(FulfillmentUser & {
            FulfillmentAgency: FulfillmentAgency;
        })>;
    })>;
    /**
     * @returns User Ok
     * @throws ApiError
     */
    deleteUser(): CancelablePromise<User>;
    /**
     * @returns User Ok
     * @throws ApiError
     */
    changeUserPassword({ requestBody, }: {
        requestBody: ChangeUserPasswordDto;
    }): CancelablePromise<User>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getUserById({ id, }: {
        id: string;
    }): CancelablePromise<(User & {
        FulfillmentUser: Array<(FulfillmentUser & {
            FulfillmentAgency: FulfillmentAgency;
        })>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateUserById({ id, requestBody, }: {
        id: string;
        requestBody: UpdateUserDto;
    }): CancelablePromise<(User & {
        FulfillmentUser: Array<(FulfillmentUser & {
            FulfillmentAgency: FulfillmentAgency;
        })>;
    })>;
}
