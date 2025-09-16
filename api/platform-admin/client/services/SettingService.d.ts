import type { UpsertRevenueLimitDto } from '../models/UpsertRevenueLimitDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SettingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformRevenueLimit(): CancelablePromise<{
        revenueCeiling: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePlatformRevenueLimit({ requestBody, }: {
        requestBody: UpsertRevenueLimitDto;
    }): CancelablePromise<{
        numberValue: number;
        key: string;
        type: 'REVENUE_LIMIT';
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
}
