import type { CreateTiktokPixelDto } from '../models/CreateTiktokPixelDto';
import type { Product } from '../models/Product';
import type { TiktokPixel } from '../models/TiktokPixel';
import type { UpdateTiktokPixelDto } from '../models/UpdateTiktokPixelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TiktokPixelService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTiktokPixel({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateTiktokPixelDto;
    }): CancelablePromise<(TiktokPixel & {
        Product: Array<Product>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTiktokPixel({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<(TiktokPixel & {
        Product: Array<Product>;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTiktokPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<(TiktokPixel & {
        Product: Array<Product>;
    })>;
    /**
     * @returns TiktokPixel Ok
     * @throws ApiError
     */
    updateTiktokPixel({ storeId, pixelId, requestBody, }: {
        storeId: string;
        pixelId: string;
        requestBody: UpdateTiktokPixelDto;
    }): CancelablePromise<TiktokPixel>;
    /**
     * @returns TiktokPixel Ok
     * @throws ApiError
     */
    deleteTiktokPixel({ storeId, pixelId, }: {
        storeId: string;
        pixelId: string;
    }): CancelablePromise<TiktokPixel>;
}
