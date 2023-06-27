import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    approveRequestSourcing({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: ApproveRequestSourcingDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    rejectRequestSourcing({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: RejectRequestSourcingDto;
    }): CancelablePromise<GetResult_any_any_any_>;
}
