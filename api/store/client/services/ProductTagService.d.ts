import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ProductTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    getProductTag({ id, }: {
        id: string;
    }): CancelablePromise<Tag>;
}
