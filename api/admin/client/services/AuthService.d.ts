import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { LoginDto } from '../models/LoginDto';
import type { SignInPusherDto } from '../models/SignInPusherDto';
import type { UserRole } from '../models/UserRole';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AuthService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    login({ requestBody, }: {
        requestBody: LoginDto;
    }): CancelablePromise<{
        maxOwnedStores: number;
        role: UserRole;
        email: string;
        name: string;
        FulfillmentUser: Array<{
            FulfillmentAgency: FulfillmentAgency;
        }>;
        id: string;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    signInPusher({ requestBody, }: {
        requestBody: SignInPusherDto;
    }): CancelablePromise<void>;
}
