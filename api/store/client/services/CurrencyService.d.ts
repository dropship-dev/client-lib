import type { CreateCurrencyDto } from '../models/CreateCurrencyDto';
import type { Currency } from '../models/Currency';
import type { UpdateCurrencyDto } from '../models/UpdateCurrencyDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CurrencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPopularStoreConversionRate({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        rate: number;
        toCurrency: string;
        fromCurrency: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCurrency({ id, }: {
        id: number;
    }): CancelablePromise<{
        isSupported: boolean;
        rateToUSD: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
        symbol: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCurrency({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: number;
        requestBody: UpdateCurrencyDto;
    }): CancelablePromise<{
        isSupported: boolean;
        rateToUSD: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
        symbol: string;
    }>;
    /**
     * @returns Currency Ok
     * @throws ApiError
     */
    getAllCurrency({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<Currency>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCurrency({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreateCurrencyDto;
    }): CancelablePromise<{
        isSupported: boolean;
        rateToUSD: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
        symbol: string;
    }>;
}
