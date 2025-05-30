import type { CreateGADto } from '../models/CreateGADto';
import type { GoogleAnalytic } from '../models/GoogleAnalytic';
import type { UpdateGADto } from '../models/UpdateGADto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class GoogleAnalyticService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createGa({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateGADto;
    }): CancelablePromise<({
        Product: Array<{
            id: number;
        }>;
    } & {
        isAppliedToAllPages: boolean;
        measurementId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllGa({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<({
        Product: Array<{
            id: number;
        }>;
    } & {
        isAppliedToAllPages: boolean;
        measurementId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getGa({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<({
        Product: Array<{
            id: number;
        }>;
    } & {
        isAppliedToAllPages: boolean;
        measurementId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>;
    /**
     * @returns GoogleAnalytic Ok
     * @throws ApiError
     */
    updateGa({ storeId, pixelId, requestBody, }: {
        storeId: string;
        pixelId: string;
        requestBody: UpdateGADto;
    }): CancelablePromise<GoogleAnalytic>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteGa({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<{
        isAppliedToAllPages: boolean;
        measurementId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
}
