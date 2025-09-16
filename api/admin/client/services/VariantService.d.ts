import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_CustomVariantOptionValues } from '../models/PrismaJson_CustomVariantOptionValues';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
            displayName: string;
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            customVariantOption: PrismaJson_CustomVariantOptionValues;
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
        displayName: string;
        productId: number;
        cost: PrismaJson_CostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        customVariantOption: PrismaJson_CustomVariantOptionValues;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    })>;
}
