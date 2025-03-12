import type { CreatePlatformVariantsDto } from '../models/CreatePlatformVariantsDto';
import type { Prisma_BatchPayload } from '../models/Prisma_BatchPayload';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdatePlatformVariantDto } from '../models/UpdatePlatformVariantDto';
import type { UpdatePlatformVariantsDto } from '../models/UpdatePlatformVariantsDto';
import type { UpdatePlatformVariantStatusDto } from '../models/UpdatePlatformVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PlatformVariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Prisma_BatchPayload Ok
     * @throws ApiError
     */
    createPlatformVariants({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: CreatePlatformVariantsDto;
    }): CancelablePromise<Prisma_BatchPayload>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updatePlatformVariants({ fulfillmentAgencyId, platformProductId, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        requestBody: UpdatePlatformVariantsDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deletePlatformVariants({ fulfillmentAgencyId, platformProductId, ids, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getPlatformVariant({ fulfillmentAgencyId, platformProductId, id, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
    }): CancelablePromise<{
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        platformProductId: number;
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
    updatePlatformVariant({ fulfillmentAgencyId, platformProductId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantDto;
    }): CancelablePromise<{
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        platformProductId: number;
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
    deletePlatformVariant({ fulfillmentAgencyId, platformProductId, id, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
    }): CancelablePromise<{
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        platformProductId: number;
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
    updatePlatformVariantStatus({ fulfillmentAgencyId, platformProductId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        platformProductId: number;
        id: number;
        requestBody: UpdatePlatformVariantStatusDto;
    }): CancelablePromise<{
        fulfillmentPlatformVariantId: string;
        groupPlatformVariantId: number;
        cost: PrismaJson_PlatformCostInfo;
        supplierPrice: number;
        price: number;
        photo: string;
        isEnable: boolean;
        variantOption: PrismaJson_VariantOptionValues;
        SKU: string;
        deleted: boolean;
        platformProductId: number;
        isActive: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
}
