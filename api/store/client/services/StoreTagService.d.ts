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
    getProductTags({ storeId, productId, search, }: {
        storeId: string;
        productId: number;
        search?: string;
    }): CancelablePromise<Array<Tag>>;
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    getStoreTags({ storeId, search, limit, }: {
        storeId: string;
        search?: string;
        limit?: number;
    }): CancelablePromise<Array<Tag>>;
}
