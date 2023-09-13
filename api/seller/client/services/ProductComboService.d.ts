import type { CreateComboDto } from '../models/CreateComboDto';
import type { ProductCombo } from '../models/ProductCombo';
import type { UpdateComboDto } from '../models/UpdateComboDto';
import type { UpdateCombosDto } from '../models/UpdateCombosDto';
import type { UpdateComboStatusDto } from '../models/UpdateComboStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ProductComboService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ProductCombo Ok
     * @throws ApiError
     */
    createCombo({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: CreateComboDto;
    }): CancelablePromise<ProductCombo>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllCombo({ storeId, productId, pageSize, nextPageIndex, }: {
        storeId: string;
        productId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<ProductCombo>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateCombos({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: UpdateCombosDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCombos({ storeId, productId, ids, }: {
        storeId: string;
        productId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns ProductCombo Ok
     * @throws ApiError
     */
    getCombo({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<ProductCombo>;
    /**
     * @returns ProductCombo Ok
     * @throws ApiError
     */
    updateCombo({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateComboDto;
    }): CancelablePromise<ProductCombo>;
    /**
     * @returns ProductCombo Ok
     * @throws ApiError
     */
    deleteCombo({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<ProductCombo>;
    /**
     * @returns ProductCombo Ok
     * @throws ApiError
     */
    updateComboStatus({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateComboStatusDto;
    }): CancelablePromise<ProductCombo>;
}
