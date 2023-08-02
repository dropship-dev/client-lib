import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PerformanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    getPerformance({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    getProductPerformance({ startDate, endDate, storeId, }: {
        startDate?: string;
        endDate?: string;
        storeId?: string;
    }): CancelablePromise<void>;
}
