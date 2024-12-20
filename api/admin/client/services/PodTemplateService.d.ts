import type { _36_Enums_FileType } from '../models/_36_Enums_FileType';
import type { CreateTemplatePodDto } from '../models/CreateTemplatePodDto';
import type { GetAllTemplateResponse } from '../models/GetAllTemplateResponse';
import type { IPageDetail } from '../models/IPageDetail';
import type { PrismaJson_PodFileGroupLayers } from '../models/PrismaJson_PodFileGroupLayers';
import type { PrismaJson_PodFileProperties } from '../models/PrismaJson_PodFileProperties';
import type { PrismaJson_PrintAreaBounds } from '../models/PrismaJson_PrintAreaBounds';
import type { PrismaJson_PrintAreaPhotos } from '../models/PrismaJson_PrintAreaPhotos';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { StatusTemplate } from '../models/StatusTemplate';
import type { UpdatePodTemplateDto } from '../models/UpdatePodTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTemplate({ requestBody, }: {
        requestBody: CreateTemplatePodDto;
    }): CancelablePromise<{
        isStock: boolean;
        podCategoryId: number;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTechniqueId: number;
        podProductTypeId: number;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        description: string;
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
    getAllTemplate({ search, sort, status, podProductTypeId, ignorePodTemplateId, podCategoryId, storeId, fulfillmentAgencyId, isFavorite, page, limit, }: {
        search?: string;
        sort?: 'ASC' | 'DESC';
        status?: Array<StatusTemplate>;
        podProductTypeId?: number;
        ignorePodTemplateId?: number;
        podCategoryId?: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
        isFavorite?: boolean;
        page?: number;
        limit?: number;
    }): CancelablePromise<{
        data: Array<GetAllTemplateResponse>;
        pageDetail: IPageDetail;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateTemplate({ id, requestBody, }: {
        id: number;
        requestBody: UpdatePodTemplateDto;
    }): CancelablePromise<({
        isStock: boolean;
        podCategoryId: number;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTechniqueId: number;
        podProductTypeId: number;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        description: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: number;
    } | boolean)>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDetailTemplate({ id, selectAllVariant, }: {
        id: number;
        selectAllVariant?: boolean;
    }): CancelablePromise<{
        PodTemplateVariant: Array<{
            faPrice: number;
            sku: string;
            minSellingPrice: number;
            supplierCost: number;
            podTemplateId: number;
            isEnable: boolean;
            isActive: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            name: string;
            id: number;
        }>;
        PodFile: Array<{
            podDesignId: number;
            podPrintAreaId: number;
            properties: PrismaJson_PodFileProperties;
            groupLayers: PrismaJson_PodFileGroupLayers;
            fileName: string;
            podTemplateId: number;
            type: _36_Enums_FileType;
            id: number;
        }>;
        PodPrintArea: Array<{
            printAreaBounds: PrismaJson_PrintAreaBounds;
            faPrice: number;
            supplierCost: number;
            photos: PrismaJson_PrintAreaPhotos;
            name: string;
            id: number;
        }>;
        PodTechnique: {
            name: string;
            id: number;
        };
        isStock: boolean;
        podCategoryId: number;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTechniqueId: number;
        podProductTypeId: number;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        description: string;
        name: string;
        id: number;
        url: string;
        isFavorite: boolean;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTemplateVariant({ id, podVariantIds, podDesignId, }: {
        id: number;
        podVariantIds: Array<number>;
        podDesignId?: number;
    }): CancelablePromise<Array<{
        designVariantId: number;
        comparePrice: number;
        price: number;
        isActive: boolean;
        minSellingPrice: number;
        isEnable: boolean;
        name: string;
        id: number;
    }>>;
}
