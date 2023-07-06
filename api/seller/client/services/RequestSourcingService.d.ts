import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { UpdateRequestSourcingDto } from '../models/UpdateRequestSourcingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestSourcingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    createRequestSourcing({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
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
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<RequestSourcing>;
    }>;
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    getRequestSourcing({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<RequestSourcing>;
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    updateRequestSourcing({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: UpdateRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    deleteRequestSourcing({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<RequestSourcing>;
}
