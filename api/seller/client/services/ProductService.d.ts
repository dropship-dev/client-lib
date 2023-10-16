import type { AdminTag } from '../models/AdminTag';
import type { Campaign } from '../models/Campaign';
import type { Discount } from '../models/Discount';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { Review } from '../models/Review';
import type { Tag } from '../models/Tag';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { UpdateProductStatusDto } from '../models/UpdateProductStatusDto';
import type { UpdateProductStatusesDto } from '../models/UpdateProductStatusesDto';
import type { VariantCombo } from '../models/VariantCombo';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';
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
            Campaign: Campaign;
            VariantCombo: Array<VariantCombo>;
            ProductVariant: Array<(ProductVariant & {
                PlatformVariant: {
                    photo: string;
                    price: number;
                    platformProductId: number;
                    isEnable: boolean;
                    isActive: boolean;
                    variantOption: VariantOptionValues;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    id: number;
                };
            })>;
            Tag: Array<Tag>;
            PlatformProduct: {
                variantOption: VariantOptions;
                Tag: Array<AdminTag>;
            };
        })>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteProducts({ storeId, productIds, }: {
        storeId: string;
        productIds: Array<number>;
    }): CancelablePromise<string>;
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
     * @returns Product Ok
     * @throws ApiError
     */
    updateProductStatuses({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateProductStatusesDto;
    }): CancelablePromise<Array<Product>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductByPermalink({ storeId, permalink, }: {
        storeId: string;
        permalink: string;
    }): CancelablePromise<(Product & {
        Campaign: (Campaign & {
            listDiscount: Array<Discount>;
        });
        VariantCombo: Array<VariantCombo>;
        ProductVariant: Array<(ProductVariant & {
            PlatformVariant: PlatformVariant;
        })>;
        Review: Array<Review>;
        FbPixel: Array<{
            pixelId: string;
        }>;
        Tag: Array<Tag>;
        PlatformProduct: {
            variantOption: VariantOptions;
            id: number;
        };
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProduct({ storeId, productId, }: {
        storeId: string;
        productId: number;
    }): CancelablePromise<(Product & {
        Campaign: (Campaign & {
            listDiscount: Array<Discount>;
        });
        VariantCombo: Array<VariantCombo>;
        ProductVariant: Array<(ProductVariant & {
            PlatformVariant: {
                price: number;
            };
        })>;
        Tag: Array<Tag>;
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
        storeId: string;
        productId: number;
        requestBody: UpdateProductDto;
    }): CancelablePromise<Product>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteProduct({ storeId, productId, }: {
        storeId: string;
        productId: number;
    }): CancelablePromise<string>;
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    updateProductStatus({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: UpdateProductStatusDto;
    }): CancelablePromise<Array<Product>>;
}
