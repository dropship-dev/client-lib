import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { UserRole } from '../models/UserRole';
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
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment(): CancelablePromise<Array<{
        publishableKey: string;
        type: PaymentType;
        creator: {
            role: UserRole;
            updatedAt: string;
            createdAt: string;
            avatar: string;
            email: string;
            name: string;
            id: string;
        };
        updatedAt: string;
        createdAt: string;
        email: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, }: {
        id: number;
    }): CancelablePromise<{
        publishableKey: string;
        type: PaymentType;
        creator: {
            role: UserRole;
            updatedAt: string;
            createdAt: string;
            avatar: string;
            email: string;
            name: string;
            id: string;
        };
        updatedAt: string;
        createdAt: string;
        email: string;
        id: number;
    }>;
}
