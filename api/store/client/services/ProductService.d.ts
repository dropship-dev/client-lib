import type { AdminTag } from '../models/AdminTag';
import type { Product } from '../models/Product';
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
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<(Product & {
            PlatformProduct: {
                variantOption: VariantOptions;
                Tag: Array<AdminTag>;
            };
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProduct({ storeId, productId, }: {
        storeId: number;
        productId: number;
    }): CancelablePromise<(Product & {
        PlatformProduct: {
            variantOption: VariantOptions;
            Tag: Array<AdminTag>;
        };
    })>;
}
