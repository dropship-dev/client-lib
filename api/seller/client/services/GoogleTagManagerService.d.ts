import type { CreateGTMDto } from '../models/CreateGTMDto';
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
    }): CancelablePromise<({
        Product: Array<{
            id: number;
        }>;
    } & {
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        tag: string;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllGoogleTagManager({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<({
        Product: Array<{
            id: number;
        }>;
    } & {
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        tag: string;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGoogleTagManager({ storeId, tag, }: {
        storeId: string;
        tag: string;
    }): CancelablePromise<({
        Product: Array<{
            id: number;
        }>;
    } & {
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        tag: string;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateGoogleTagManager({ storeId, tag, requestBody, }: {
        storeId: string;
        tag: string;
        requestBody: UpdateGTMDto;
    }): CancelablePromise<{
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        tag: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteGoogleTagManager({ storeId, tag, }: {
        storeId: string;
        tag: string;
    }): CancelablePromise<{
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        tag: string;
    }>;
}
