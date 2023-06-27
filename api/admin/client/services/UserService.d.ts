import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getUser({ id, }: {
        id: string;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateUser({ id, requestBody, }: {
        id: string;
        requestBody: UpdateUserDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteUser({ id, }: {
        id: string;
    }): CancelablePromise<GetResult_any_any_any_>;
}
