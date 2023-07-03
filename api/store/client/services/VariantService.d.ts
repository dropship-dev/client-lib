import type { PlatformVariant } from '../models/PlatformVariant';
import type { ProductVariant } from '../models/ProductVariant';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getVariant({ storeId, productId, id, }: {
        storeId: number;
        productId: number;
        id: number;
    }): CancelablePromise<(ProductVariant & {
        PlatformVariant: PlatformVariant;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllVariant({ storeId, productId, pageSize, nextPageIndex, }: {
        storeId: number;
        productId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number | boolean | PlatformVariant);
        total: number;
        data: Array<(ProductVariant & {
            PlatformVariant: PlatformVariant;
        })>;
    }>;
}
