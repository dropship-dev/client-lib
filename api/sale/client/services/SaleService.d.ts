import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { UpdateRequestStatusDto } from '../models/UpdateRequestStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SaleService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    requestStatus({ userId, }: {
        userId: string;
    }): CancelablePromise<{
        status: _36_Enums_SaleStatus;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateRequest({ requestBody, }: {
        requestBody: UpdateRequestStatusDto;
    }): CancelablePromise<string>;
}
