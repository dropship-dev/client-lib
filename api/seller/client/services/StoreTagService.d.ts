import type { CreateStoreTagDto } from '../models/CreateStoreTagDto';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_CustomVariantOptions } from '../models/PrismaJson_CustomVariantOptions';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Tag Ok
     * @throws ApiError
     */
    createStoreTag({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateStoreTagDto;
    }): CancelablePromise<Tag>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreTags({ storeId, search, limit, }: {
        storeId: string;
        search?: string;
        limit?: number;
    }): CancelablePromise<Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteStoreTag({ storeId, name, }: {
        storeId: string;
        name: string;
    }): CancelablePromise<{
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    connectProductTag({ storeId, productId, name, }: {
        storeId: string;
        productId: number;
        name: string;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteProductTag({ storeId, productId, name, }: {
        storeId: string;
        productId: number;
        name: string;
    }): CancelablePromise<{
        snapshotAt: string;
        themePageId: number;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductTags({ storeId, productId, search, }: {
        storeId: string;
        productId: number;
        search?: string;
    }): CancelablePromise<Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>>;
}
