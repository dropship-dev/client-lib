import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class VariantService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getVariant({ storeId, productId, id, }: {
        storeId: number;
        productId: number;
        id: number;
    }): CancelablePromise<({
        PlatformVariant: GetResult_any_any_any_;
    } & GetResult_any_any_any_)>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateVariant({ storeId, productId, id, requestBody, }: {
        storeId: number;
        productId: number;
        id: number;
        requestBody: UpdateVariantDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteVariant({ storeId, productId, id, }: {
        storeId: number;
        productId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllVariant({ storeId, productId, pageSize, nextPageIndex, }: {
        storeId: number;
        productId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number | boolean | GetResult_any_any_any_);
        total: number;
        data: Array<({
            PlatformVariant: GetResult_any_any_any_;
        } & GetResult_any_any_any_)>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateVariantStatus({ storeId, productId, id, requestBody, }: {
        storeId: number;
        productId: number;
        id: number;
        requestBody: UpdateVariantStatusDto;
    }): CancelablePromise<GetResult_any_any_any_>;
}
