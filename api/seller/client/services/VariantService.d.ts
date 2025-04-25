import type { CreateVariantsDto } from '../models/CreateVariantsDto';
import type { GetBatchResult } from '../models/GetBatchResult';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantsDto } from '../models/UpdateVariantsDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns GetBatchResult Ok
     * @throws ApiError
     */
    createVariants({ storeId, requestBody, }: {
        storeId: string;
        requestBody: Array<CreateVariantsDto>;
    }): CancelablePromise<GetBatchResult>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllVariant({ storeId, productId, pageSize, nextPageIndex, }: {
        storeId: string;
        productId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<({
            PlatformVariant: {
                price: number;
                variantOption: PrismaJson_VariantOptionValues;
            };
        } & {
            podDesignVariantId: number;
            platformVariantId: number;
            margin: PrismaJson_MarginInfo;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            deleted: boolean;
            isActive: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        })>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateVariants({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: UpdateVariantsDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteVariants({ storeId, productId, ids, }: {
        storeId: string;
        productId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getVariant({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<({
        PlatformVariant: {
            price: number;
            variantOption: PrismaJson_VariantOptionValues;
        };
    } & {
        podDesignVariantId: number;
        platformVariantId: number;
        margin: PrismaJson_MarginInfo;
        minSellingPrice: number;
        compareAtPrice: number;
        productId: number;
        cost: PrismaJson_CostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateVariant({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateVariantDto;
    }): CancelablePromise<{
        podDesignVariantId: number;
        platformVariantId: number;
        margin: PrismaJson_MarginInfo;
        minSellingPrice: number;
        compareAtPrice: number;
        productId: number;
        cost: PrismaJson_CostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteVariant({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<{
        podDesignVariantId: number;
        platformVariantId: number;
        margin: PrismaJson_MarginInfo;
        minSellingPrice: number;
        compareAtPrice: number;
        productId: number;
        cost: PrismaJson_CostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateVariantStatus({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateVariantStatusDto;
    }): CancelablePromise<string>;
}
