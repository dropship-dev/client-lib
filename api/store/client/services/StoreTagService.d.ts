import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreTags({ storeId, search, limit, }: {
        storeId: string;
        search?: string;
        limit?: number;
    }): CancelablePromise<Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductTags({ storeId, productId, search, }: {
        storeId: string;
        productId: number;
        search?: string;
    }): CancelablePromise<Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>>;
}
