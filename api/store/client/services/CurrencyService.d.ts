import type { CreateCurrencyDto } from '../models/CreateCurrencyDto';
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
     * @returns any Ok
     * @throws ApiError
     */
    getAllCurrency({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<{
        isSupported: boolean;
        rateToUSD: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
        symbol: string;
    }>>;
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
