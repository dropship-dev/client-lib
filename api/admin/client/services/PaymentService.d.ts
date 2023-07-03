import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { PaymentType } from '../models/PaymentType';
import type { UserRole } from '../models/UserRole';
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
    getAllPayment(): CancelablePromise<Array<{
        createdAt: string;
        updatedAt: string;
        type: PaymentType;
        publishableKey: string;
        email: string;
        creator: {
            createdAt: string;
            updatedAt: string;
            role: UserRole;
            id: string;
            email: string;
            name: string;
            avatar: string;
        };
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, }: {
        id: number;
    }): CancelablePromise<{
        createdAt: string;
        updatedAt: string;
        type: PaymentType;
        publishableKey: string;
        email: string;
        creator: {
            createdAt: string;
            updatedAt: string;
            role: UserRole;
            id: string;
            email: string;
            name: string;
            avatar: string;
        };
        id: number;
    }>;
}
