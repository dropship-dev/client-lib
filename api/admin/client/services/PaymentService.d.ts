import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { Payment } from '../models/Payment';
import type { PaymentType } from '../models/PaymentType';
import type { Store } from '../models/Store';
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
    createPayment({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Payment>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<(Store & {
        Payment: Array<Payment>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, fulfillmentAgencyId, storeId, }: {
        id: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<({
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
    } | (Store & {
        Payment: Array<{
            isShowCompanyAddress: boolean;
            publishableKey: string;
            companyAddress: string;
            companyName: string;
            email: string;
            name: string;
            type: PaymentType;
            id: number;
        }>;
    }))>;
    /**
     * @returns Payment Ok
     * @throws ApiError
     */
    updatePayment({ id, requestBody, fulfillmentAgencyId, storeId, }: {
        id: number;
        requestBody: UpdatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Payment>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePayment({ id, fulfillmentAgencyId, storeId, }: {
        id: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<string>;
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
