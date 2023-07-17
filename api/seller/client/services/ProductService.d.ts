import type { AdminTag } from '../models/AdminTag';
import type { Product } from '../models/Product';
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
    getAllProduct({ storeId, pageSize, nextPageIndex, isActive, }: {
        storeId: number;
        pageSize?: number;
        nextPageIndex?: number;
        isActive?: boolean;
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
    countProduct({ storeId, isActive, }: {
        storeId: number;
        isActive?: boolean;
    }): CancelablePromise<{
        count: number;
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
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    updateProduct({ storeId, productId, requestBody, }: {
        storeId: number;
        productId: number;
        requestBody: UpdateProductDto;
    }): CancelablePromise<Product>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteProduct({ storeId, productId, }: {
        storeId: number;
        productId: number;
    }): CancelablePromise<string>;
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    updateProductStatus({ storeId, productId, requestBody, }: {
        storeId: number;
        productId: number;
        requestBody: UpdateProductStatusDto;
    }): CancelablePromise<Product>;
}
