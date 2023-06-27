import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CurrencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCurrency({ id, }: {
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
