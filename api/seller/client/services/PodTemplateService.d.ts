import type { FavoriteTemplateDto } from '../models/FavoriteTemplateDto';
import type { FileType } from '../models/FileType';
import type { GetAllTemplateResponse } from '../models/GetAllTemplateResponse';
import type { IPageDetail } from '../models/IPageDetail';
import type { JsonValue } from '../models/JsonValue';
import type { PodFileProperties } from '../models/PodFileProperties';
import type { PodMeshPoints } from '../models/PodMeshPoints';
import type { PodTemplateFavorite } from '../models/PodTemplateFavorite';
import type { PrintAreaBounds } from '../models/PrintAreaBounds';
import type { StatusTemplate } from '../models/StatusTemplate';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
    getDetailTemplate({ id, }: {
        id: number;
    }): CancelablePromise<{
        isStock: boolean;
        sku: string;
        sizeGuide: string;
        keyFeature: string;
        podTechniqueId: number;
        podProductTypeId: number;
        podCategoryId: number;
        isActive: boolean;
        supplierContact: string;
        variantOption: VariantOptions;
        description: string;
        name: string;
        PodFile: Array<{
            podPrintAreaId: number;
            properties: PodFileProperties;
            layers: JsonValue;
            file: string;
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
            variantOption: VariantOptionValues;
            name: string;
            id: number;
        }>;
        PodPrintArea: Array<{
            printAreaBounds: PrintAreaBounds;
            meshPoints: PodMeshPoints;
            faPrice: number;
            supplierCost: number;
            name: string;
            id: number;
        }>;
        id: number;
        File: {
            fileMockup: Array<{
                podPrintAreaId: number;
                properties: PodFileProperties;
                layers: JsonValue;
                file: string;
                podDesignId: number;
                podTemplateId: number;
                type: FileType;
                id: number;
            }>;
            fileTemplate: any;
        };
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
    /**
     * @returns PodTemplateFavorite Ok
     * @throws ApiError
     */
    favoriteTemplate({ id, requestBody, }: {
        id: number;
        requestBody: FavoriteTemplateDto;
    }): CancelablePromise<PodTemplateFavorite>;
}
