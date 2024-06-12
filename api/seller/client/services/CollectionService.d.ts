import type { Collection } from '../models/Collection';
import type { CollectionStatus } from '../models/CollectionStatus';
import type { CollectionType } from '../models/CollectionType';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { operatorCondition } from '../models/operatorCondition';
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
    getAllCollection({ storeId, pageSize, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: string;
        startDate?: string;
        endDate?: string;
        search?: string;
        collectionType?: CollectionType;
        collectionStatus?: CollectionStatus;
    }): CancelablePromise<Array<Collection>>;
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
    getProductByConditions({ storeId, requestBody, }: {
        storeId: string;
        requestBody: operatorCondition;
    }): CancelablePromise<void>;
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
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, storeId, }: {
        id: Array<number>;
        storeId: string;
    }): CancelablePromise<string>;
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
