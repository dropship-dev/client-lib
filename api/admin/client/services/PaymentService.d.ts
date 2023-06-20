import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PaymentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Payment Ok
     * @throws ApiError
     */
    createPayment({ requestBody, }: {
        requestBody: CreatePaymentDto;
    }): CancelablePromise<Payment>;
    /**
     * @returns Payment Ok
     * @throws ApiError
     */
    getAllPayment(): CancelablePromise<Array<Payment>>;
    /**
     * @returns Payment Ok
     * @throws ApiError
     */
    getPayment({ id, }: {
        id: number;
    }): CancelablePromise<Payment>;
}
