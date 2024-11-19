import type { CreateGTMDto } from '../models/CreateGTMDto';
import type { GoogleTagManager } from '../models/GoogleTagManager';
import type { UpdateGTMDto } from '../models/UpdateGTMDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class GoogleTagManagerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createGoogleTagManager({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateGTMDto;
    }): CancelablePromise<(GoogleTagManager & {
        Product: Array<{
            id: number;
        }>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllGoogleTagManager({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<(GoogleTagManager & {
        Product: Array<{
            id: number;
        }>;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGoogleTagManager({ storeId, tag, }: {
        storeId: string;
        tag: string;
    }): CancelablePromise<(GoogleTagManager & {
        Product: Array<{
            id: number;
        }>;
    })>;
    /**
     * @returns GoogleTagManager Ok
     * @throws ApiError
     */
    updateGoogleTagManager({ storeId, tag, requestBody, }: {
        storeId: string;
        tag: string;
        requestBody: UpdateGTMDto;
    }): CancelablePromise<GoogleTagManager>;
    /**
     * @returns GoogleTagManager Ok
     * @throws ApiError
     */
    deleteGoogleTagManager({ storeId, tag, }: {
        storeId: string;
        tag: string;
    }): CancelablePromise<GoogleTagManager>;
}
