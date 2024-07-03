import type { CreateProductTypeDto } from '../models/CreateProductTypeDto';
import type { ProductType } from '../models/ProductType';
import type { UpdateProductTypeDto } from '../models/UpdateProductTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodProductTypeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ProductType Ok
     * @throws ApiError
     */
    createProductType({ requestBody, }: {
        requestBody: CreateProductTypeDto;
    }): CancelablePromise<ProductType>;
    /**
     * @returns ProductType Ok
     * @throws ApiError
     */
    getAllProductType({ categoryId, }: {
        categoryId: number;
    }): CancelablePromise<Array<ProductType>>;
    /**
     * @returns ProductType Ok
     * @throws ApiError
     */
    updateProductType({ id, requestBody, }: {
        id: number;
        requestBody: UpdateProductTypeDto;
    }): CancelablePromise<ProductType>;
    /**
     * @returns ProductType Ok
     * @throws ApiError
     */
    deleteProductType({ id, }: {
        id: number;
    }): CancelablePromise<ProductType>;
}
