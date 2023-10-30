import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class WebhookService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    handleEventPaypalService({ agencyId, paymentId, requestBody, }: {
        agencyId: number;
        paymentId: number;
        requestBody: any;
    }): CancelablePromise<string>;
}
