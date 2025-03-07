import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { CreateCollectionDefaultDto } from '../models/CreateCollectionDefaultDto';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { UpdateCollectionDefaultDto } from '../models/UpdateCollectionDefaultDto';
import type { UpdateCollectionDefaultStatusDto } from '../models/UpdateCollectionDefaultStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCollectionDefault({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreateCollectionDefaultDto;
    }): CancelablePromise<{
        settingId: number;
        SEO: any;
        condition: PrismaJson_ConditionCollection;
        description: string;
        photos: PrismaJson_Photos;
        type: _36_Enums_CollectionType;
        status: _36_Enums_CollectionStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllCollectionDefault({ fulfillmentAgencyId, pageSize, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }: {
        fulfillmentAgencyId: number;
        pageSize?: number;
        nextPageIndex?: number;
        startDate?: string;
        endDate?: string;
        search?: string;
        collectionType?: _36_Enums_CollectionType;
        collectionStatus?: _36_Enums_CollectionStatus;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<({
            PlatformProduct: Array<{
                PlatformVariant: Array<{
                    cost: PrismaJson_PlatformCostInfo;
                    price: number;
                }>;
                isEnable: boolean;
                isActive: boolean;
                deleted: boolean;
                photos: PrismaJson_Photos;
                name: string;
                id: number;
            }>;
        } & {
            settingId: number;
            SEO: any;
            condition: PrismaJson_ConditionCollection;
            description: string;
            photos: PrismaJson_Photos;
            type: _36_Enums_CollectionType;
            status: _36_Enums_CollectionStatus;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCollection({ id, fulfillmentAgencyId, isActiveProduct, isEnableProduct, deletedProduct, }: {
        id: number;
        fulfillmentAgencyId: number;
        isActiveProduct?: boolean;
        isEnableProduct?: boolean;
        deletedProduct?: boolean;
    }): CancelablePromise<({
        PlatformProduct: Array<{
            PlatformVariant: Array<{
                cost: PrismaJson_PlatformCostInfo;
                price: number;
            }>;
            isEnable: boolean;
            isActive: boolean;
            deleted: boolean;
            photos: PrismaJson_Photos;
            name: string;
            id: number;
        }>;
    } & {
        settingId: number;
        SEO: any;
        condition: PrismaJson_ConditionCollection;
        description: string;
        photos: PrismaJson_Photos;
        type: _36_Enums_CollectionType;
        status: _36_Enums_CollectionStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCollection({ id, fulfillmentAgencyId, }: {
        id: number;
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateCollection({ id, fulfillmentAgencyId, requestBody, }: {
        id: number;
        fulfillmentAgencyId: number;
        requestBody: UpdateCollectionDefaultDto;
    }): CancelablePromise<void>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, fulfillmentAgencyId, }: {
        id: Array<number>;
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusesCollection({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateCollectionDefaultStatusDto;
    }): CancelablePromise<void>;
}
