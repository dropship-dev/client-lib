import type { ResponseGetUser } from '../models/ResponseGetUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ResponseGetUser Ok
     * @throws ApiError
     */
    getUser(): CancelablePromise<ResponseGetUser>;
}
