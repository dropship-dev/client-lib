import type { CreateStoreTagDto } from '../models/CreateStoreTagDto';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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