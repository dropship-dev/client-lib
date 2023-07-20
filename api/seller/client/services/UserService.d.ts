import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns User Ok
     * @throws ApiError
     */
    getUser(): CancelablePromise<User>;
    /**
     * @returns User Ok
     * @throws ApiError
     */
    updateUser({ requestBody, }: {
        requestBody: UpdateUserDto;
    }): CancelablePromise<User>;
    /**
     * @returns User Ok
     * @throws ApiError
     */
    deleteUser(): CancelablePromise<User>;
}
