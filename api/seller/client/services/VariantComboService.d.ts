import type { BatchPayload } from '../models/BatchPayload';
import type { CreateComboDto } from '../models/CreateComboDto';
import type { UpdateComboDto } from '../models/UpdateComboDto';
import type { UpdateCombosDto } from '../models/UpdateCombosDto';
import type { UpdateComboStatusDto } from '../models/UpdateComboStatusDto';
import type { VariantCombo } from '../models/VariantCombo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantComboService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns VariantCombo Ok
     * @throws ApiError
     */
    createCombo({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: CreateComboDto;
    }): CancelablePromise<VariantCombo>;
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
        data: Array<VariantCombo>;
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
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    createCombos({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: Array<CreateComboDto>;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns VariantCombo Ok
     * @throws ApiError
     */
    getCombo({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<VariantCombo>;
    /**
     * @returns VariantCombo Ok
     * @throws ApiError
     */
    updateCombo({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateComboDto;
    }): CancelablePromise<VariantCombo>;
    /**
     * @returns VariantCombo Ok
     * @throws ApiError
     */
    deleteCombo({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<VariantCombo>;
    /**
     * @returns VariantCombo Ok
     * @throws ApiError
     */
    updateComboStatus({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateComboStatusDto;
    }): CancelablePromise<VariantCombo>;
}
