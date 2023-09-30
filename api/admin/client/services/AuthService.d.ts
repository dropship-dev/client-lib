import type { LoginDto } from '../models/LoginDto';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AuthService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns User Ok
     * @throws ApiError
     */
    login({ requestBody, }: {
        requestBody: LoginDto;
    }): CancelablePromise<User>;
}
