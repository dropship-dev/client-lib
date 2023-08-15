import type { CreateStoreTagDto } from '../models/CreateStoreTagDto';
import type { Product } from '../models/Product';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    connectProductTag({ storeId, productId, name, }: {
        storeId: string;
        productId: number;
        name: string;
    }): CancelablePromise<void>;
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    deleteProductTag({ storeId, productId, name, }: {
        storeId: string;
        productId: number;
        name: string;
    }): CancelablePromise<Product>;
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    getProductTags({ storeId, productId, search, }: {
        storeId: string;
        productId: number;
        search?: string;
    }): CancelablePromise<Array<Tag>>;
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    createStoreTag({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateStoreTagDto;
    }): CancelablePromise<Tag>;
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    getStoreTags({ storeId, search, limit, }: {
        storeId: string;
        search?: string;
        limit?: number;
    }): CancelablePromise<Array<Tag>>;
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    deleteStoreTag({ storeId, name, }: {
        storeId: string;
        name: string;
    }): CancelablePromise<Tag>;
}
