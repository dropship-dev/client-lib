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
    createPayment({ requestBody, fulfillmentAgencyId, }: {
        requestBody: CreatePaymentDto;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<Payment>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId?: number;
    }): CancelablePromise<Array<{
        publishableKey: string;
        type: PaymentType;
        creator: {
            role: UserRole;
            avatar: string;
            email: string;
            updatedAt: string;
            createdAt: string;
            name: string;
            id: string;
        };
        email: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, fulfillmentAgencyId, }: {
        id: number;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<{
        publishableKey: string;
        type: PaymentType;
        creator: {
            role: UserRole;
            avatar: string;
            email: string;
            updatedAt: string;
            createdAt: string;
            name: string;
            id: string;
        };
        email: string;
        updatedAt: string;
        createdAt: string;
        name: string;
        id: number;
    }>;
}
