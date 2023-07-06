import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestSourcingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    approveRequestSourcing({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: ApproveRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    rejectRequestSourcing({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: RejectRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
}
