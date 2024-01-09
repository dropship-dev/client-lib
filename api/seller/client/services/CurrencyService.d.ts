import type { CreateCurrencyDto } from '../models/CreateCurrencyDto';
import type { Currency } from '../models/Currency';
import type { UpdateCurrencyDto } from '../models/UpdateCurrencyDto';
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
    /**
     * @returns Currency Ok
     * @throws ApiError
     */
    updateCurrency({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: number;
        requestBody: UpdateCurrencyDto;
    }): CancelablePromise<Currency>;
    /**
     * @returns Currency Ok
     * @throws ApiError
     */
    createCurrency({ requestBody, }: {
        requestBody: CreateCurrencyDto;
    }): CancelablePromise<Currency>;
}
