import type { AsyncTask } from '../models/AsyncTask';
import type { FulfillmentStatus } from '../models/FulfillmentStatus';
import type { OrderDisputeStatus } from '../models/OrderDisputeStatus';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AsyncTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns AsyncTask Ok
     * @throws ApiError
     */
    createExportOrderTask({ exportedFilename, fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, search, productName, startDate, endDate, startTotal, endTotal, gateway, disputeStatus, latestStat, }: {
        exportedFilename: string;
        fulfillmentAgencyId?: number;
        storeId?: string;
        paymentStatus?: Array<TransactionStatus>;
        fulfillmentStatus?: Array<FulfillmentStatus>;
        search?: string;
        productName?: string;
        startDate?: string;
        endDate?: string;
        startTotal?: number;
        endTotal?: number;
        gateway?: Array<number>;
        disputeStatus?: Array<OrderDisputeStatus>;
        latestStat?: boolean;
    }): CancelablePromise<AsyncTask>;
    /**
     * @returns AsyncTask Ok
     * @throws ApiError
     */
    getAsyncTask({ id, }: {
        id: string;
    }): CancelablePromise<AsyncTask>;
}
