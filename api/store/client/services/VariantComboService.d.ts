import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantComboService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllCombo({ storeId, productId, pageSize, nextPageIndex, }: {
        storeId: string;
        productId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            items: PrismaJson_VariantComboItems;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            supplierCost: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            SKU: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            id: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCombo({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<{
        items: PrismaJson_VariantComboItems;
        minSellingPrice: number;
        compareAtPrice: number;
        productId: number;
        supplierCost: number;
        price: number;
        photo: string;
        isEnable: boolean;
        isActive: boolean;
        SKU: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: number;
    }>;
}
