import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { RequestSourcingStatus } from '../models/RequestSourcingStatus';
import type { Store } from '../models/Store';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestSourcingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRequestSourcing({ storeId, fulfillmentAgencyId, statusRequest, search, startDate, endDate, pageSize, nextPageIndex, }: {
        storeId: string;
        fulfillmentAgencyId?: number;
        statusRequest?: Array<RequestSourcingStatus>;
        search?: string;
        startDate?: string;
        endDate?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<(RequestSourcing & {
            Store: Store;
        })>;
    }>;
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    approveRequestSourcing({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: ApproveRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    rejectRequestSourcing({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: RejectRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
}
