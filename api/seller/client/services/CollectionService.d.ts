import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { BoostSale } from '../models/BoostSale';
import type { Collection } from '../models/Collection';
import type { CreateCollectionDto } from '../models/CreateCollectionDto';
import type { operatorCondition } from '../models/operatorCondition';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CustomVariantOptions } from '../models/PrismaJson_CustomVariantOptions';
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
        photos: PrismaJson_Photos;
        description: string;
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
                isEnable: boolean;
                permalink: string;
                deleted: boolean;
                photos: PrismaJson_Photos;
                isActive: boolean;
                name: string;
                id: number;
                ProductVariant: Array<{
                    compareAtPrice: number;
                    price: number;
                }>;
            }>;
        } & {
            SEO: any;
            condition: PrismaJson_ConditionCollection;
            photos: PrismaJson_Photos;
            description: string;
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
            Review: Array<{
                comment: string;
                rating: number;
                productId: number;
                photos: PrismaJson_Photos;
                email: string | null;
                name: string | null;
                updatedAt: string;
                createdAt: string;
                id: number;
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
        snapshotAt: string;
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        supplierContact: string;
        customVariantOption: PrismaJson_CustomVariantOptions;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        platformProductId: number;
        deleted: boolean;
        photos: PrismaJson_Photos;
        description: string;
        isActive: boolean;
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
