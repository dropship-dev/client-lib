import type { Collection } from '../models/Collection';
import type { CollectionStatus } from '../models/CollectionStatus';
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
    createCollection({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateCollectionDto;
    }): CancelablePromise<Collection>;
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    getCollection({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<Collection>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateCollection({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: UpdateCollectionDto;
    }): CancelablePromise<void>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCollection({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusCollection({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: CollectionStatus;
    }): CancelablePromise<void>;
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    createCrossSell({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateCollectionDto;
    }): CancelablePromise<Collection>;
    /**
     * @returns Collection Ok
     * @throws ApiError
     */
    getCrossSell({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<Collection>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateCrossSell({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: UpdateCollectionDto;
    }): CancelablePromise<void>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCrossSell({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusCrossSell({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: CollectionStatus;
    }): CancelablePromise<void>;
}
