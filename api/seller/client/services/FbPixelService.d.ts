import type { CreateFbPixelDto } from '../models/CreateFbPixelDto';
import type { FbPixel } from '../models/FbPixel';
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
    }): CancelablePromise<(FbPixel & {
        Product: Array<{
            id: number;
        }>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllFbPixel({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<(FbPixel & {
        Product: Array<{
            id: number;
        }>;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFbPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<(FbPixel & {
        Product: Array<{
            id: number;
        }>;
    })>;
    /**
     * @returns FbPixel Ok
     * @throws ApiError
     */
    updateFbPixel({ storeId, pixelId, requestBody, }: {
        storeId: string;
        pixelId: string;
        requestBody: UpdateFbPixelDto;
    }): CancelablePromise<FbPixel>;
    /**
     * @returns FbPixel Ok
     * @throws ApiError
     */
    deleteFbPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<FbPixel>;
}
