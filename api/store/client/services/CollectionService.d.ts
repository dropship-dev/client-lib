import type { Collection } from '../models/Collection';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CollectionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    getCrossSell({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<Collection>;
}
