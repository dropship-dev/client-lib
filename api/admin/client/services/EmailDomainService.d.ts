import type { _36_Enums_EmailDomainStatus } from '../models/_36_Enums_EmailDomainStatus';
import type { AddEmailUsernameDto } from '../models/AddEmailUsernameDto';
import type { CreateEmailDomainDto } from '../models/CreateEmailDomainDto';
import type { PrismaJson_EmailDomainRecords } from '../models/PrismaJson_EmailDomainRecords';
import type { PrismaJson_TxtVerification } from '../models/PrismaJson_TxtVerification';
import type { SendTestEmailDto } from '../models/SendTestEmailDto';
import type { UpdateEmailFlowAbandonedCheckoutDto } from '../models/UpdateEmailFlowAbandonedCheckoutDto';
import type { UpdateEmailUsernameDto } from '../models/UpdateEmailUsernameDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class EmailDomainService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createEmailDomain({ requestBody, }: {
        requestBody: CreateEmailDomainDto;
    }): CancelablePromise<{
        resendId: number;
        txtVerification: PrismaJson_TxtVerification;
        providerDomainId: string;
        domain: string;
        isDefault: boolean;
        status: _36_Enums_EmailDomainStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
        records: Array<({
            priority?: number;
            value?: string;
            status?: string;
            type?: string;
            name?: string;
            record?: string;
        } | {
            value: string;
            records: string;
            name: string;
            ttl: string;
            type: string;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListEmailDomain({ storeId, fulfillmentAgencyId, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<Array<{
        txtVerification: PrismaJson_TxtVerification;
        domain: string;
        status: _36_Enums_EmailDomainStatus;
        id: number;
        EmailUsername: Array<{
            isPayment: boolean;
            isAbandonmentSettings: boolean;
            username: string;
            email: string;
            id: number;
        }>;
        isPayment: boolean;
        isAbandonmentSettings: boolean;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListEmailUsername({ storeId, fulfillmentAgencyId, keyword, isActiveEmailDomain, isDefaultEmail, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        keyword?: string;
        isActiveEmailDomain?: boolean;
        isDefaultEmail?: boolean;
    }): CancelablePromise<Array<{
        emailDomainId: number;
        username: string;
        email: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListEmailFlowByStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        abandonedCheckout: {
            fromName: string;
            replyToEmail: string;
            email: string;
        };
        payment: Array<{
            fromName: string;
            replyToEmail: string;
            email: string;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    sendTestEmail({ requestBody, storeId, fulfillmentAgencyId, }: {
        requestBody: SendTestEmailDto;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateEmailFlowAbandonedCheckout({ requestBody, }: {
        requestBody: UpdateEmailFlowAbandonedCheckoutDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteEmailDomain({ id, storeId, fulfillmentAgencyId, }: {
        id: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    verifyEmailDomain({ id, storeId, fulfillmentAgencyId, }: {
        id: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<{
        resendId: number;
        txtVerification: PrismaJson_TxtVerification;
        records: PrismaJson_EmailDomainRecords;
        providerDomainId: string;
        domain: string;
        isDefault: boolean;
        status: _36_Enums_EmailDomainStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRecordsEmailDomain({ id, storeId, fulfillmentAgencyId, }: {
        id: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<{
        txtVerification: PrismaJson_TxtVerification;
        id: number;
        records: Array<({
            priority?: number;
            value?: string;
            status?: string;
            type?: string;
            name?: string;
            record?: string;
        } | {
            value: string;
            records: string;
            name: string;
            ttl: string;
            type: string;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    addEmailUsername({ id, requestBody, }: {
        id: number;
        requestBody: AddEmailUsernameDto;
    }): CancelablePromise<{
        emailDomainId: number;
        username: string;
        email: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateEmailUsername({ domainId, emailUsernameId, requestBody, }: {
        domainId: number;
        emailUsernameId: number;
        requestBody: UpdateEmailUsernameDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteEmailUsername({ emailUsernameId, storeId, fulfillmentAgencyId, }: {
        emailUsernameId: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<string>;
}
