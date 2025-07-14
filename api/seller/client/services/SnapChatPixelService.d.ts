import type { CreateSnapChatPixelDto } from '../models/CreateSnapChatPixelDto';
import type { SnapChatPixel } from '../models/SnapChatPixel';
import type { UpdateSnapChatPixelDto } from '../models/UpdateSnapChatPixelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SnapChatPixelService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createSnapChatPixel({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateSnapChatPixelDto;
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
    getAllSnapChatPixel({ storeId, }: {
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
    getSnapChatPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<(SnapChatPixel & {
        Product: Array<{
            id: number;
        }>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateSnapChatPixel({ storeId, pixelId, requestBody, }: {
        storeId: string;
        pixelId: string;
        requestBody: UpdateSnapChatPixelDto;
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
    deleteSnapChatPixel({ storeId, pixelId, }: {
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
