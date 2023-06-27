import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PaymentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPayment({ requestBody, }: {
        requestBody: CreatePaymentDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment(): CancelablePromise<Array<GetResult_any_any_any_>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, }: {
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
