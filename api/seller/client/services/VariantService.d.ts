import type { BatchPayload } from '../models/BatchPayload';
import type { CreateVariantsDto } from '../models/CreateVariantsDto';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantsDto } from '../models/UpdateVariantsDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    createVariants({ storeId, requestBody, }: {
        storeId: string;
        requestBody: Array<CreateVariantsDto>;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllVariant({ storeId, productId, pageSize, nextPageIndex, }: {
        storeId: string;
        productId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<(ProductVariant & {
            PlatformVariant: PlatformVariant;
        })>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateVariants({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: UpdateVariantsDto;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteVariants({ storeId, productId, ids, }: {
        storeId: string;
        productId: number;
        ids: Array<number>;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getVariant({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<(ProductVariant & {
        PlatformVariant: PlatformVariant;
    })>;
    /**
     * @returns ProductVariant Ok
     * @throws ApiError
     */
    updateVariant({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateVariantDto;
    }): CancelablePromise<ProductVariant>;
    /**
     * @returns ProductVariant Ok
     * @throws ApiError
     */
    deleteVariant({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<ProductVariant>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateVariantStatus({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateVariantStatusDto;
    }): CancelablePromise<string>;
}
