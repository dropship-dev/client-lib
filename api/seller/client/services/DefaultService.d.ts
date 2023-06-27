import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Photos } from '../models/Photos';
import type { UpdateRequestSourcingDto } from '../models/UpdateRequestSourcingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createRequestSourcing({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateRequestSourcingDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRequestSourcing({ storeId, pageSize, nextPageIndex, }: {
        storeId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number | Photos);
        total: number;
        data: Array<GetResult_any_any_any_>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRequestSourcing({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateRequestSourcing({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: UpdateRequestSourcingDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteRequestSourcing({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
