import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Photos } from '../models/Photos';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { UpdateProductStatusDto } from '../models/UpdateProductStatusDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ProductService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllProduct({ storeId, pageSize, nextPageIndex, }: {
        storeId: number;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number | boolean | Photos | {
            Tag: Array<GetResult_any_any_any_>;
            variantOption: VariantOptions;
        });
        total: number;
        data: Array<({
            PlatformProduct: {
                Tag: Array<GetResult_any_any_any_>;
                variantOption: VariantOptions;
            };
        } & GetResult_any_any_any_)>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateProduct({ storeId, productId, requestBody, }: {
        storeId: number;
        productId: number;
        requestBody: UpdateProductDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteProduct({ storeId, productId, }: {
        storeId: number;
        productId: number;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateProductStatus({ storeId, productId, requestBody, }: {
        storeId: number;
        productId: number;
        requestBody: UpdateProductStatusDto;
    }): CancelablePromise<GetResult_any_any_any_>;
}
