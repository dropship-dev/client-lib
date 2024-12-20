import type { _36_Enums_FileType } from '../models/_36_Enums_FileType';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { DuplicateDesignDto } from '../models/DuplicateDesignDto';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { Prisma_BatchPayload } from '../models/Prisma_BatchPayload';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PodFileGroupLayers } from '../models/PrismaJson_PodFileGroupLayers';
import type { PrismaJson_PodFileProperties } from '../models/PrismaJson_PodFileProperties';
import type { PrismaJson_PrintAreaBounds } from '../models/PrismaJson_PrintAreaBounds';
import type { PrismaJson_PrintAreaPhotos } from '../models/PrismaJson_PrintAreaPhotos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { PublishToProductDto } from '../models/PublishToProductDto';
import type { UpdateDesignDto } from '../models/UpdateDesignDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodDesignService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createNewDesign({ requestBody, }: {
        requestBody: CreateDesignDto;
    }): CancelablePromise<{
        isDraft: boolean;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTemplateId: number;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        description: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllDesign({ storeId, limit, name, printArea, nextPageIndex, }: {
        storeId: string;
        limit?: number;
        name?: string;
        printArea?: Array<string>;
        nextPageIndex?: number;
    }): CancelablePromise<({
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            url: string;
            printArea: Array<string>;
            isDraft: boolean;
            isActive: boolean;
            variantOption: Array<{
                total: number;
                name: string;
            }>;
            sizeGuide: string;
            description: string;
            name: string;
            storeId: string;
            podTemplateId: number;
            id: number;
        }>;
    } | boolean)>;
    /**
     * @returns Prisma_BatchPayload Ok
     * @throws ApiError
     */
    deleteMyDesign({ requestBody, }: {
        requestBody: Array<number>;
    }): CancelablePromise<Prisma_BatchPayload>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    duplicateDesign({ requestBody, }: {
        requestBody: DuplicateDesignDto;
    }): CancelablePromise<{
        printArea: Array<any>;
        url: string;
        variantOption: Array<{
            total: number;
            name: string;
        }>;
        isDraft: boolean;
        isActive: boolean;
        sizeGuide: string;
        description: string;
        name: string;
        storeId: string;
        podTemplateId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    publishToProduct({ requestBody, }: {
        requestBody: PublishToProductDto;
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
    multiplePublishToProduct({ requestBody, }: {
        requestBody: MultiplePublishToStoreDto;
    }): CancelablePromise<{
        message: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    detailMyDesign({ id, }: {
        id: number;
    }): CancelablePromise<{
        technique: {
            name: string;
            id: number;
        };
        templateVariant: Array<{
            faPrice: number;
            sku: string;
            minSellingPrice: number;
            supplierCost: number;
            podTemplateId: number;
            variantOption: PrismaJson_VariantOptionValues;
            name: string;
            id: number;
            isSelected: boolean;
        }>;
        designVariant: Array<{
            sku: string;
            podTemplateVariantId: number;
            price: number;
            minSellingPrice: number;
            isDisable: boolean;
            isActive: boolean;
            comparePrice: number;
            variantOption: PrismaJson_VariantOptionValues;
            name: string;
            id: number;
        }>;
        myDesign: {
            isDraft: boolean;
            PodFile: Array<{
                podPrintAreaId: number;
                properties: PrismaJson_PodFileProperties;
                groupLayers: PrismaJson_PodFileGroupLayers;
                fileName: string;
                type: _36_Enums_FileType;
                id: number;
            }>;
            sku: string;
            sizeGuide: string;
            keyFeature: string;
            podTemplateId: number;
            supplierContact: string;
            variantOption: PrismaJson_VariantOptions;
            description: string;
            name: string;
            storeId: string;
            id: number;
        };
        printArea: Array<{
            printAreaBounds: PrismaJson_PrintAreaBounds;
            faPrice: number;
            supplierCost: number;
            photos: PrismaJson_PrintAreaPhotos;
            name: string;
            id: number;
            PodFile: {
                podDesignId: number;
                podPrintAreaId: number;
                properties: PrismaJson_PodFileProperties;
                groupLayers: PrismaJson_PodFileGroupLayers;
                size: string;
                backgroundUrl: string;
                url: string;
                fileName: string;
                podTemplateId: number;
                type: _36_Enums_FileType;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
        }>;
        templateInformation: {
            blank: {
                maxPrice: number;
                minPrice: number;
            };
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateMyDesign({ id, requestBody, }: {
        id: number;
        requestBody: UpdateDesignDto;
    }): CancelablePromise<{
        isDraft: boolean;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTemplateId: number;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        description: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getPrintAreaByStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<string>>;
}
