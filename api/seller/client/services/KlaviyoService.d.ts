import type { KlaviyoDto } from '../models/KlaviyoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class KlaviyoService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    createKlaviyo({ storeId, requestBody, }: {
        storeId: string;
        requestBody: KlaviyoDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getKlaviyo({ storeId, klaviyoId, }: {
        storeId: string;
        klaviyoId: string;
    }): CancelablePromise<Array<{
        salt: string;
        secretKey: string;
        publishableKey: string;
        status: boolean;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateKlaviyo({ storeId, klaviyoId, requestBody, }: {
        storeId: string;
        klaviyoId: string;
        requestBody: KlaviyoDto;
    }): CancelablePromise<{
        salt: string;
        secretKey: string;
        publishableKey: string;
        status: boolean;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteKlaviyo({ storeId, klaviyoId, }: {
        storeId: string;
        klaviyoId: string;
    }): CancelablePromise<{
        salt: string;
        secretKey: string;
        publishableKey: string;
        status: boolean;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
}
