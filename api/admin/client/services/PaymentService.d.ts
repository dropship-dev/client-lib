import type { _36_Enums_EnvironmentType } from '../models/_36_Enums_EnvironmentType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { AddPaymentToStores } from '../models/AddPaymentToStores';
import type { CreatePaymentDto } from '../models/CreatePaymentDto';
import type { UpdatePaymentDto } from '../models/UpdatePaymentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PaymentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createPayment({ requestBody, fulfillmentAgencyId, storeId, }: {
        requestBody: CreatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        salt: string;
        environment: _36_Enums_EnvironmentType;
        UIVersion: number;
        deleted: boolean;
        partnerId: string;
        merchantId: string;
        gatewayUrl: string;
        tokenExpiredAt: string;
        token: string;
        secretKey: string;
        publishableKey: string;
        isPlatform: boolean;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        userId: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPayment({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<Array<{
        creator: {
            role: _36_Enums_UserRole;
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
        publishableKey: string;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllPaymentOnboarding({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<{
        merchantEmail: string;
        paymentType: _36_Enums_PaymentType;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPayment({ id, fulfillmentAgencyId, storeId, }: {
        id: number;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        creator: {
            role: _36_Enums_UserRole;
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
        publishableKey: string;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updatePayment({ id, requestBody, fulfillmentAgencyId, storeId, }: {
        id: number;
        requestBody: UpdatePaymentDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        salt: string;
        environment: _36_Enums_EnvironmentType;
        UIVersion: number;
        deleted: boolean;
        partnerId: string;
        merchantId: string;
        gatewayUrl: string;
        tokenExpiredAt: string;
        token: string;
        secretKey: string;
        publishableKey: string;
        isPlatform: boolean;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        userId: string;
        type: _36_Enums_PaymentType;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
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
            status: _36_Enums_StoreStatus;
            email: string;
            name: string;
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
