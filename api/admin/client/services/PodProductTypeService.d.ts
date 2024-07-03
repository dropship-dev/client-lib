import type { CreateProductTypeDto } from '../models/CreateProductTypeDto';
import type { PodProductType } from '../models/PodProductType';
import type { UpdateProductTypeDto } from '../models/UpdateProductTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodProductTypeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns PodProductType Ok
     * @throws ApiError
     */
    createProductType({ requestBody, }: {
        requestBody: CreateProductTypeDto;
    }): CancelablePromise<PodProductType>;
    /**
     * @returns PodProductType Ok
     * @throws ApiError
     */
    getAllProductType({ podCategoryId, }: {
        podCategoryId: number;
    }): CancelablePromise<Array<PodProductType>>;
    /**
     * @returns PodProductType Ok
     * @throws ApiError
     */
    updateProductType({ id, requestBody, }: {
        id: number;
        requestBody: UpdateProductTypeDto;
    }): CancelablePromise<PodProductType>;
    /**
     * @returns PodProductType Ok
     * @throws ApiError
     */
    deleteProductType({ id, }: {
        id: number;
    }): CancelablePromise<PodProductType>;
}
