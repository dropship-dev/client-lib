import type { Collection } from '../models/Collection';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CollectionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    createCollection({ requestBody, }: {
        requestBody: CreateCollectionDto;
    }): CancelablePromise<Collection>;
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    getCollection({ id, }: {
        id: number;
    }): CancelablePromise<Collection>;
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    updateCollection({ id, requestBody, }: {
        id: number;
        requestBody: UpdateCollectionDto;
    }): CancelablePromise<Collection>;
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    deleteCollection({ id, }: {
        id: number;
    }): CancelablePromise<Collection>;
}
