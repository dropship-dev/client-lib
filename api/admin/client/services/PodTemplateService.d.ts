import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { GetAllTemplateResponse } from '../models/GetAllTemplateResponse';
import type { IPageDetail } from '../models/IPageDetail';
import type { PodTemplate } from '../models/PodTemplate';
import type { StatusTemplate } from '../models/StatusTemplate';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';
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
        requestBody: CreateTemplateDto;
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
        requestBody: UpdateTemplateDto;
    }): CancelablePromise<(PodTemplate | boolean)>;
    /**
     * @returns PodTemplate Ok
     * @throws ApiError
     */
    getDetailTemplate({ id, }: {
        id: number;
    }): CancelablePromise<PodTemplate>;
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
