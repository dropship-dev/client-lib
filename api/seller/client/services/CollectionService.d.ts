import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { BoostSale } from '../models/BoostSale';
import type { Collection } from '../models/Collection';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { operatorCondition } from '../models/operatorCondition';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { UpdateCollectionDto } from '../models/UpdateCollectionDto';
import type { UpdateCollectionStatusDto } from '../models/UpdateCollectionStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CollectionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCollection({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateCollectionDto;
    }): CancelablePromise<{
        SEO: any;
        condition: PrismaJson_ConditionCollection;
        description: string;
        photos: PrismaJson_Photos;
        type: _36_Enums_CollectionType;
        status: _36_Enums_CollectionStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllCollection({ storeId, pageSize, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }: {
        storeId: string;
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
            Product: Array<{
                ProductVariant: Array<{
                    compareAtPrice: number;
                    price: number;
                }>;
                isEnable: boolean;
                isActive: boolean;
                permalink: string;
                deleted: boolean;
                photos: PrismaJson_Photos;
                name: string;
                id: number;
            }>;
        } & {
            SEO: any;
            condition: PrismaJson_ConditionCollection;
            description: string;
            photos: PrismaJson_Photos;
            type: _36_Enums_CollectionType;
            status: _36_Enums_CollectionStatus;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCollection({ id, storeId, isActiveProduct, isEnableProduct, deletedProduct, }: {
        id: number;
        storeId: string;
        isActiveProduct?: boolean;
        isEnableProduct?: boolean;
        deletedProduct?: boolean;
    }): CancelablePromise<(Collection & {
        Product: Array<{
            ProductVariant: Array<{
                compareAtPrice: number;
                price: number;
            }>;
            deleted: boolean;
            isEnable: boolean;
            isActive: boolean;
            permalink: string;
            photos: Array<string>;
            name: string;
            id: number;
        }>;
        BoostSale: Array<BoostSale>;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCollection({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateCollection({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: UpdateCollectionDto;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductByConditions({ storeId, requestBody, }: {
        storeId: string;
        requestBody: operatorCondition;
    }): CancelablePromise<Array<{
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, storeId, }: {
        id: Array<number>;
        storeId: string;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusesCollection({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateCollectionStatusDto;
    }): CancelablePromise<void>;
}
