import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { LoginDto } from '../models/LoginDto';
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
    }): CancelablePromise<GetResult_any_any_any_>;
}
