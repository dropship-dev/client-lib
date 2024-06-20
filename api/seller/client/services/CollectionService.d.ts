import type { Collection } from '../models/Collection';
import type { CollectionStatus } from '../models/CollectionStatus';
import type { CollectionType } from '../models/CollectionType';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { CrossSell } from '../models/CrossSell';
import type { operatorCondition } from '../models/operatorCondition';
import type { Product } from '../models/Product';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { UpdateCollectionStatusDto } from '../models/UpdateCollectionStatusDto';
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
     * @returns any Ok
     * @throws ApiError
     */
    getAllCollection({ storeId, pageSize, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
        startDate?: string;
        endDate?: string;
        search?: string;
        collectionType?: CollectionType;
        collectionStatus?: CollectionStatus;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<Collection>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCollection({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<(Collection & {
        Product: Array<Product>;
        CrossSell: Array<CrossSell>;
    })>;
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
    updateCollection({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: UpdateCollectionDto;
    }): CancelablePromise<void>;
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    getProductByConditions({ storeId, requestBody, }: {
        storeId: string;
        requestBody: operatorCondition;
    }): CancelablePromise<Array<Product>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, storeId, }: {
        id: Array<number>;
        storeId: string;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusCollection({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: UpdateCollectionStatusDto;
    }): CancelablePromise<void>;
}
