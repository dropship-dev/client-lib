import type { _36_Enums_AsyncTaskStatus } from '../models/_36_Enums_AsyncTaskStatus';
import type { _36_Enums_AsyncTaskType } from '../models/_36_Enums_AsyncTaskType';
import type { _36_Enums_FulfillmentStatus } from '../models/_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from '../models/_36_Enums_OrderDisputeStatus';
import type { _36_Enums_TransactionStatus } from '../models/_36_Enums_TransactionStatus';
import type { AsyncTask } from '../models/AsyncTask';
import type { Exclude_RequestPayoutStatus_REVIEW_ } from '../models/Exclude_RequestPayoutStatus_REVIEW_';
import type { Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_ } from '../models/Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_';
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
    createExportOrderTask({ exportedFilename, fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, search, productName, startDate, endDate, startTotal, endTotal, gateway, disputeStatus, latestStat, }: {
        exportedFilename: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
        paymentStatus?: Array<_36_Enums_TransactionStatus>;
        fulfillmentStatus?: Array<_36_Enums_FulfillmentStatus>;
        search?: string;
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
        gateway?: Array<number>;
        disputeStatus?: Array<_36_Enums_OrderDisputeStatus>;
        latestStat?: boolean;
    }): CancelablePromise<{
        input: any;
        type: _36_Enums_AsyncTaskType;
        status: _36_Enums_AsyncTaskStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
        result: PrismaJson_AsyncTaskResult;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createExportPayoutRequestTask({ fulfillmentAgencyId, exportedFilename, startDate, endDate, statuses, }: {
        fulfillmentAgencyId: number;
        exportedFilename?: string;
        startDate?: string;
        endDate?: string;
        statuses?: Array<Exclude_RequestPayoutStatus_REVIEW_>;
    }): CancelablePromise<{
        input: any;
        type: _36_Enums_AsyncTaskType;
        status: _36_Enums_AsyncTaskStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
        result: PrismaJson_AsyncTaskResult;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createExportProductRequestTask({ fulfillmentAgencyId, exportedFilename, startDate, endDate, statuses, }: {
        fulfillmentAgencyId: number;
        exportedFilename?: string;
        startDate?: string;
        endDate?: string;
        statuses?: Array<Exclude_RequestSourcingStatus_SELLER_REJECTED_or_SELLER_ACCEPTED_>;
    }): CancelablePromise<{
        input: any;
        type: _36_Enums_AsyncTaskType;
        status: _36_Enums_AsyncTaskStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
        result: PrismaJson_AsyncTaskResult;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createExportAccountancyTask({ exportedFilename, fulfillmentAgencyId, startDate, endDate, storeId, }: {
        exportedFilename: string;
        fulfillmentAgencyId: number;
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<{
        input: any;
        type: _36_Enums_AsyncTaskType;
        status: _36_Enums_AsyncTaskStatus;
        updatedAt: string;
        createdAt: string;
        id: string;
        result: PrismaJson_AsyncTaskResult;
    }>;
    /**
     * @returns AsyncTask Ok
     * @throws ApiError
     */
    getAsyncTask({ id, }: {
        id: string;
    }): CancelablePromise<AsyncTask>;
}
