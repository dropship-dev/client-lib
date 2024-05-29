import type { coordinate } from '../models/coordinate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PerformanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getVisitorViewProductByFulfillment({ fulfillmentAgencyId, startDate, endDate, }: {
        fulfillmentAgencyId: number;
        startDate: string;
        endDate: string;
    }): CancelablePromise<{
        coordinates: coordinate;
        viewer: number;
    }>;
}
