import type { CreateComboDto } from '../models/CreateComboDto';
import type { Prisma_BatchPayload } from '../models/Prisma_BatchPayload';
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { UpdateComboDto } from '../models/UpdateComboDto';
import type { UpdateCombosDto } from '../models/UpdateCombosDto';
import type { UpdateComboStatusDto } from '../models/UpdateComboStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantComboService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCombo({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: CreateComboDto;
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
     * @returns string Ok
     * @throws ApiError
     */
    updateCombos({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: UpdateCombosDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCombos({ storeId, productId, ids, }: {
        storeId: string;
        productId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns Prisma_BatchPayload Ok
     * @throws ApiError
     */
    createCombos({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: Array<CreateComboDto>;
    }): CancelablePromise<Prisma_BatchPayload>;
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCombo({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateComboDto;
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteCombo({ storeId, productId, id, }: {
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateComboStatus({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateComboStatusDto;
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
