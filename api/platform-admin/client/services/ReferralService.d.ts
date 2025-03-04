import type { GetSummaryReferralResult } from '../models/GetSummaryReferralResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ReferralService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns GetSummaryReferralResult Ok
     * @throws ApiError
     */
    getSummary({ startDate, endDate, search, }: {
        startDate?: string;
        endDate?: string;
        search?: string;
    }): CancelablePromise<GetSummaryReferralResult>;
}
