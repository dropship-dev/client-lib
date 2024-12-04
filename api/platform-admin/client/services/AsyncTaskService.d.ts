import type { _36_Enums_AsyncTaskStatus } from '../models/_36_Enums_AsyncTaskStatus';
import type { _36_Enums_AsyncTaskType } from '../models/_36_Enums_AsyncTaskType';
import type { PrismaJson_AsyncTaskResult } from '../models/PrismaJson_AsyncTaskResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AsyncTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAsyncTask({ id, }: {
        id: string;
    }): CancelablePromise<{
        input: any;
        type: _36_Enums_AsyncTaskType;
        status: _36_Enums_AsyncTaskStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
        result: PrismaJson_AsyncTaskResult;
    }>;
}
