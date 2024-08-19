import type { CreateTemplatePodDto } from '../models/CreateTemplatePodDto';
import type { FileType } from '../models/FileType';
import type { GetAllTemplateResponse } from '../models/GetAllTemplateResponse';
import type { IPageDetail } from '../models/IPageDetail';
import type { PodFileProperties } from '../models/PodFileProperties';
import type { PodMeshPoints } from '../models/PodMeshPoints';
import type { PodTemplate } from '../models/PodTemplate';
import type { PrintAreaBounds } from '../models/PrintAreaBounds';
import type { StatusTemplate } from '../models/StatusTemplate';
import type { UpdatePodTemplateDto } from '../models/UpdatePodTemplateDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns PodTemplate Ok
     * @throws ApiError
     */
    createTemplate({ requestBody, }: {
        requestBody: CreateTemplatePodDto;
    }): CancelablePromise<PodTemplate>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTemplate({ search, sort, status, podProductTypeId, podCategoryId, storeId, fulfillmentAgencyId, isFavorite, page, limit, }: {
        search?: string;
        sort?: 'ASC' | 'DESC';
        status?: Array<StatusTemplate>;
        podProductTypeId?: number;
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
    }): CancelablePromise<(PodTemplate | boolean)>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDetailTemplate({ id, }: {
        id: number;
    }): CancelablePromise<{
        isStock: boolean;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTechniqueId: number;
        podProductTypeId: number;
        isActive: boolean;
        supplierContact: string;
        variantOption: VariantOptions;
        description: string;
        podCategoryId: number;
        name: string;
        PodFile: Array<{
            podPrintAreaId: number;
            properties: PodFileProperties;
            fileName: string;
            podDesignId: number;
            podTemplateId: number;
            type: FileType;
            id: number;
        }>;
        PodTemplateVariant: Array<{
            faPrice: number;
            minSellingPrice: number;
            supplierCost: number;
            sku: string;
            podTemplateId: number;
            isActive: boolean;
            variantOption: VariantOptionValues;
            name: string;
            id: number;
        }>;
        PodPrintArea: Array<{
            printAreaBounds: PrintAreaBounds;
            meshPoints: PodMeshPoints;
            photo: string;
            faPrice: number;
            supplierCost: number;
            name: string;
            id: number;
        }>;
        id: number;
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
