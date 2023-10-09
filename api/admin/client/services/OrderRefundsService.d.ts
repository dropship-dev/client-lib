import type { UpdateOrderRefundDto } from '../models/UpdateOrderRefundDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderRefundsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateHistoryOrderRefund({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: string;
        requestBody: UpdateOrderRefundDto;
    }): CancelablePromise<string>;
}
