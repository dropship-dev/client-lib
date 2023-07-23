import type { AdminTag } from '../models/AdminTag';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
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
    getAllProduct({ storeId, pageSize, nextPageIndex, name, tags, isActive, startPrice, endPrice, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
        name?: string;
        tags?: Array<string>;
        isActive?: boolean;
        startPrice?: number;
        endPrice?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<(Product & {
            ProductVariant: Array<ProductVariant>;
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
    countProduct({ storeId, isActive, }: {
        storeId: string;
        isActive?: boolean;
    }): CancelablePromise<{
        count: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProduct({ storeId, productId, }: {
        storeId: string;
        productId: number;
    }): CancelablePromise<(Product & {
        PlatformProduct: {
            variantOption: VariantOptions;
            Tag: Array<AdminTag>;
        };
    })>;
}
