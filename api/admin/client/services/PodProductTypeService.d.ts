import type { CreateProductTypeDto } from '../models/CreateProductTypeDto';
import type { UpdateProductTypeDto } from '../models/UpdateProductTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodProductTypeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createProductType({ requestBody, }: {
        requestBody: CreateProductTypeDto;
    }): CancelablePromise<{
        podCategoryId: number;
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
    getAllProductType({ podCategoryId, }: {
        podCategoryId: number;
    }): CancelablePromise<Array<{
        podCategoryId: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateProductType({ id, requestBody, }: {
        id: number;
        requestBody: UpdateProductTypeDto;
    }): CancelablePromise<{
        podCategoryId: number;
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
    deleteProductType({ id, }: {
        id: number;
    }): CancelablePromise<{
        podCategoryId: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        id: number;
    }>;
}
