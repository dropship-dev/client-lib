import type { _36_Enums_RequestSourcingStatus } from '../models/_36_Enums_RequestSourcingStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_RequestSourcingHistory } from '../models/PrismaJson_RequestSourcingHistory';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { UpdateRequestSourcingDto } from '../models/UpdateRequestSourcingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestSourcingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createRequestSourcing({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateRequestSourcingDto;
    }): CancelablePromise<{
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        productId: number;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        status: _36_Enums_RequestSourcingStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
        link: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRequestSourcing({ storeId, fulfillmentAgencyId, statusRequest, search, startDate, endDate, pageSize, nextPageIndex, }: {
        storeId?: string;
        fulfillmentAgencyId?: number;
        statusRequest?: Array<_36_Enums_RequestSourcingStatus>;
        search?: string;
        startDate?: string;
        endDate?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<({
            Store: {
                stripeDefaultPaymentMethodId: string;
                stripeCustomerId: string;
                currencyId: number;
                maxUsers: number;
                balance: number;
                referralCode: string;
                defaultBankAccount: string;
                shippingPolicy: string;
                termsOfService: string;
                privacyPolicy: string;
                refundPolicy: string;
                shippingFeeAdditional: number;
                shippingFee: number;
                primaryDomain: string;
                subDomain: string;
                pageName: string;
                country: string;
                zipCode: string;
                city: string;
                apartmentAddress: string;
                address: string;
                avatar: string;
                timezone: PrismaJson_Timezone;
                type: _36_Enums_StoreType;
                status: _36_Enums_StoreStatus;
                phone: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                fulfillmentAgencyId: number;
                id: string;
            };
        } & {
            historyRequestSourcing: PrismaJson_RequestSourcingHistory;
            acceptByAdmin: boolean;
            acceptBySeller: boolean;
            rejectReasonByAdmin: string;
            rejectReasonBySeller: string;
            productId: number;
            platformProductId: number;
            description: string;
            photos: PrismaJson_Photos;
            status: _36_Enums_RequestSourcingStatus;
            name: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            id: number;
            link: string;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRequestSourcing({ id, storeId, fulfillmentAgencyId, }: {
        id: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<({
        Store: {
            stripeDefaultPaymentMethodId: string;
            stripeCustomerId: string;
            currencyId: number;
            maxUsers: number;
            balance: number;
            referralCode: string;
            defaultBankAccount: string;
            shippingPolicy: string;
            termsOfService: string;
            privacyPolicy: string;
            refundPolicy: string;
            shippingFeeAdditional: number;
            shippingFee: number;
            primaryDomain: string;
            subDomain: string;
            pageName: string;
            country: string;
            zipCode: string;
            city: string;
            apartmentAddress: string;
            address: string;
            avatar: string;
            timezone: PrismaJson_Timezone;
            type: _36_Enums_StoreType;
            status: _36_Enums_StoreStatus;
            phone: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: string;
        };
    } & {
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        productId: number;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        status: _36_Enums_RequestSourcingStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
        link: string;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateRequestSourcing({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: UpdateRequestSourcingDto;
    }): CancelablePromise<{
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        productId: number;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        status: _36_Enums_RequestSourcingStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
        link: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteRequestSourcing({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<{
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        productId: number;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        status: _36_Enums_RequestSourcingStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
        link: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    approveRequestSourcing({ id, requestBody, fulfillmentAgencyId, storeId, }: {
        id: number;
        requestBody: ApproveRequestSourcingDto;
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<{
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        productId: number;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        status: _36_Enums_RequestSourcingStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
        link: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    rejectRequestSourcing({ id, requestBody, storeId, fulfillmentAgencyId, }: {
        id: number;
        requestBody: RejectRequestSourcingDto;
        storeId?: string;
        fulfillmentAgencyId?: number;
    }): CancelablePromise<{
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        productId: number;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        status: _36_Enums_RequestSourcingStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
        link: string;
    }>;
}
