import type { FavoriteTemplateDto } from '../models/FavoriteTemplateDto';
import type { GetAllTemplateResponse } from '../models/GetAllTemplateResponse';
import type { IPageDetail } from '../models/IPageDetail';
import type { PodTemplate } from '../models/PodTemplate';
import type { PodTemplateFavorite } from '../models/PodTemplateFavorite';
import type { StatusTemplate } from '../models/StatusTemplate';
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
    /**
     * @returns PodTemplateFavorite Ok
     * @throws ApiError
     */
    favoriteTemplate({ id, requestBody, }: {
        id: number;
        requestBody: FavoriteTemplateDto;
    }): CancelablePromise<PodTemplateFavorite>;
}
