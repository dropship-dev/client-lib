import type { CreateFbPixelDto } from '../models/CreateFbPixelDto';
import type { UpdateFbPixelDto } from '../models/UpdateFbPixelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FbPixelService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createFbPixel({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateFbPixelDto;
    }): CancelablePromise<({
        Product: Array<{
            id: number;
        }>;
    } & {
        pixelId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllFbPixel({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<({
        Product: Array<{
            id: number;
        }>;
    } & {
        pixelId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFbPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<({
        Product: Array<{
            id: number;
        }>;
    } & {
        pixelId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateFbPixel({ storeId, pixelId, requestBody, }: {
        storeId: string;
        pixelId: string;
        requestBody: UpdateFbPixelDto;
    }): CancelablePromise<{
        pixelId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteFbPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<{
        pixelId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
}
