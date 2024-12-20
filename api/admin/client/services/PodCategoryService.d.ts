import type { CreateCategoryDto } from '../models/CreateCategoryDto';
import type { GetListCategoryByCatalog } from '../models/GetListCategoryByCatalog';
import type { GetListCategoryByCategory } from '../models/GetListCategoryByCategory';
import type { LayoutCategory } from '../models/LayoutCategory';
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodCategoryService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCategory({ requestBody, }: {
        requestBody: CreateCategoryDto;
    }): CancelablePromise<{
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListCategory({ fulfillmentAgencyId, storeId, search, startDate, endDate, layout, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
        search?: string;
        startDate?: string;
        endDate?: string;
        layout?: LayoutCategory;
    }): CancelablePromise<(Array<GetListCategoryByCatalog> | Array<GetListCategoryByCategory>)>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCategory({ id, requestBody, }: {
        id: number;
        requestBody: UpdateCategoryDto;
    }): CancelablePromise<{
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteCategory({ id, }: {
        id: number;
    }): CancelablePromise<{
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listAllCategory({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<{
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: number;
    }>>;
}
