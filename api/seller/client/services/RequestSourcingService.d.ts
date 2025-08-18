import type { _36_Enums_RequestSourcingStatus } from '../models/_36_Enums_RequestSourcingStatus';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_RequestSourcingHistory } from '../models/PrismaJson_RequestSourcingHistory';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_VariantPlatformSnapshot } from '../models/PrismaJson_VariantPlatformSnapshot';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { UpdateRequestSourcingDto } from '../models/UpdateRequestSourcingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RequestSourcingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    createRequestSourcing({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateRequestSourcingDto;
    }): CancelablePromise<RequestSourcing>;
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
            RequestSourcingSnapshot: {
                requestSourcingId: number;
                variantNamePlatform: PrismaJson_VariantPlatformSnapshot;
                snapshotAt: string;
                details: string;
                platformProductId: number;
                photos: PrismaJson_Photos;
                description: string;
                name: string;
                id: number;
            };
            Store: {
                isConversionRate: boolean;
                stripeDefaultPaymentMethodId: string;
                stripeCustomerId: string;
                warning: boolean;
                invitedDate: string;
                invitedById: number;
                currencyId: number;
                maxUsers: number;
                balance: number;
                referralCode: string;
                defaultBankAccount: string;
                shippingFeeAdditional: number;
                shippingFee: number;
                primaryDomain: string;
                subDomain: string;
                pageName: string;
                closedAt: string;
                country: string;
                zipCode: string;
                city: string;
                apartmentAddress: string;
                address: string;
                avatar: string;
                othersFee: number;
                shippingPolicy: string;
                termsOfService: string;
                refundPolicy: string;
                privacyPolicy: string;
                timezone: PrismaJson_Timezone;
                taxFeatureEnabled: boolean;
                type: _36_Enums_StoreType;
                status: _36_Enums_StoreStatus;
                phone: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                fulfillmentAgencyId: number;
                id: string;
            };
        } & {
            requestSourcingSnapshotId: number;
            productId: number;
            historyRequestSourcing: PrismaJson_RequestSourcingHistory;
            acceptByAdmin: boolean;
            acceptBySeller: boolean;
            rejectReasonByAdmin: string;
            rejectReasonBySeller: string;
            requestId: string;
            platformProductId: number;
            photos: PrismaJson_Photos;
            description: string;
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
        RequestSourcingSnapshot: {
            requestSourcingId: number;
            variantNamePlatform: PrismaJson_VariantPlatformSnapshot;
            snapshotAt: string;
            details: string;
            platformProductId: number;
            photos: PrismaJson_Photos;
            description: string;
            name: string;
            id: number;
        };
        Store: {
            isConversionRate: boolean;
            stripeDefaultPaymentMethodId: string;
            stripeCustomerId: string;
            warning: boolean;
            invitedDate: string;
            invitedById: number;
            currencyId: number;
            maxUsers: number;
            balance: number;
            referralCode: string;
            defaultBankAccount: string;
            shippingFeeAdditional: number;
            shippingFee: number;
            primaryDomain: string;
            subDomain: string;
            pageName: string;
            closedAt: string;
            country: string;
            zipCode: string;
            city: string;
            apartmentAddress: string;
            address: string;
            avatar: string;
            othersFee: number;
            shippingPolicy: string;
            termsOfService: string;
            refundPolicy: string;
            privacyPolicy: string;
            timezone: PrismaJson_Timezone;
            taxFeatureEnabled: boolean;
            type: _36_Enums_StoreType;
            status: _36_Enums_StoreStatus;
            phone: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            fulfillmentAgencyId: number;
            id: string;
        };
    } & {
        requestSourcingSnapshotId: number;
        productId: number;
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        requestId: string;
        platformProductId: number;
        photos: PrismaJson_Photos;
        description: string;
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
        requestSourcingSnapshotId: number;
        productId: number;
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        requestId: string;
        platformProductId: number;
        photos: PrismaJson_Photos;
        description: string;
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
        requestSourcingSnapshotId: number;
        productId: number;
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        requestId: string;
        platformProductId: number;
        photos: PrismaJson_Photos;
        description: string;
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
        requestSourcingSnapshotId: number;
        productId: number;
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        requestId: string;
        platformProductId: number;
        photos: PrismaJson_Photos;
        description: string;
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
        requestSourcingSnapshotId: number;
        productId: number;
        historyRequestSourcing: PrismaJson_RequestSourcingHistory;
        acceptByAdmin: boolean;
        acceptBySeller: boolean;
        rejectReasonByAdmin: string;
        rejectReasonBySeller: string;
        requestId: string;
        platformProductId: number;
        photos: PrismaJson_Photos;
        description: string;
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
