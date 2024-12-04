import type { CreateStoreTagDto } from '../models/CreateStoreTagDto';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStoreTag({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateStoreTagDto;
    }): CancelablePromise<{
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
