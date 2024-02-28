import type { Currency } from '../models/Currency';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CurrencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Currency Ok
     * @throws ApiError
     */
    getCurrency({ id, }: {
        id: number;
    }): CancelablePromise<Currency>;
}
