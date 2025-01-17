import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentAgencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAgencyByEmail({ email, }: {
        email: string;
    }): CancelablePromise<{
        avatar: string;
        nameAgency: string;
        email: string;
    }>;
}
