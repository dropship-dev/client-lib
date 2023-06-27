import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CollectionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCollection({ requestBody, }: {
        requestBody: CreateCollectionDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCollection({ id, }: {
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCollection({ id, requestBody, }: {
        id: number;
        requestBody: UpdateCollectionDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteCollection({ id, }: {
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
