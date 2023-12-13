import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { StoreStatus } from '../models/StoreStatus';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';
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
    createPayment({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreatePaymentDto;
    }): CancelablePromise<Payment>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<{
        publishableKey: string;
        companyName: string;
        creator: {
            role: UserRole;
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        type: PaymentType;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: number;
    }): CancelablePromise<{
        publishableKey: string;
        companyName: string;
        creator: {
            role: UserRole;
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        type: PaymentType;
        id: number;
    }>;
    /**
     * @returns Payment Ok
     * @throws ApiError
     */
    updatePayment({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: number;
        requestBody: UpdatePaymentDto;
    }): CancelablePromise<Payment>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPaymentStores({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: number;
    }): CancelablePromise<{
        Store: Array<{
            primaryDomain: string;
            avatar: string;
            email: string;
            name: string;
            status: StoreStatus;
            id: string;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    addPaymentToStores({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: number;
        requestBody: AddPaymentToStores;
    }): CancelablePromise<string>;
}
