import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { FileProperties } from '../models/FileProperties';
import type { FileType } from '../models/FileType';
import type { IPageDetail } from '../models/IPageDetail';
import type { Template } from '../models/Template';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Template Ok
     * @throws ApiError
     */
    createTemplate({ requestBody, }: {
        requestBody: CreateTemplateDto;
    }): CancelablePromise<Template>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTemplate({ search, sort, status, productTypeId, storeId, fulfillmentAgencyId, isFavorite, page, limit, }: {
        search?: string;
        sort?: 'ASC' | 'DESC';
        status?: boolean;
        productTypeId?: number;
        storeId?: string;
        fulfillmentAgencyId?: number;
        isFavorite?: boolean;
        page?: number;
        limit?: number;
    }): CancelablePromise<({
        data?: any;
        template: Array<any>;
        pageDetail: IPageDetail;
    } | {
        template?: any;
        data: Array<{
            variantOption: Array<{
                total: any;
                name: string;
            }>;
            isActive: boolean;
            file: string;
            minSellingPrice: number;
            description: string;
            techniqueId: number;
            productTypeId: number;
            name: string;
            id: number;
        }>;
        pageDetail: IPageDetail;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateTemplate({ id, requestBody, }: {
        id: number;
        requestBody: UpdateTemplateDto;
    }): CancelablePromise<(Template | boolean)>;
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
        techniqueId: number;
        productTypeId: number;
        categoryId: number;
        isActive: boolean;
        supplierContact: string;
        variantOption: VariantOptions;
        description: string;
        name: string;
        TemplateVariant: Array<{
            faPrice: number;
            minSellingPrice: number;
            supplierCost: number;
            sku: string;
            templateId: number;
            variantOption: VariantOptionValues;
            name: string;
            id: number;
        }>;
        PrintArea: Array<{
            faPrice: number;
            supplierCost: number;
            name: string;
            id: number;
        }>;
        id: number;
        File: {
            fileMockup: Array<{
                printAreaId: number;
                properties: FileProperties;
                designId: number;
                templateId: number;
                file: string;
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
    getTemplateVariant({ id, variantIds, designId, }: {
        id: number;
        variantIds: Array<number>;
        designId?: number;
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
