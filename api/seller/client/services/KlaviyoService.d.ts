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
    getKlaviyo({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        secretKey: any;
        publishableKey: any;
    }>;
    /**
     * @returns KlaviyoDto Ok
     * @throws ApiError
     */
    updateKlaviyo({ storeId, requestBody, }: {
        storeId: string;
        requestBody: KlaviyoDto;
    }): CancelablePromise<KlaviyoDto>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteKlaviyo({ storeId, }: {
        storeId: string;
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
