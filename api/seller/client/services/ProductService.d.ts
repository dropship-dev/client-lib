import type { AdminTag } from '../models/AdminTag';
import type { AvailableSet } from '../models/AvailableSet';
import type { Campaign } from '../models/Campaign';
import type { CloneProductDto } from '../models/CloneProductDto';
import type { CreateProductFromSellerInDependeceDto } from '../models/CreateProductFromSellerInDependeceDto';
import type { CrossSell } from '../models/CrossSell';
import type { Discount } from '../models/Discount';
import type { Photos } from '../models/Photos';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
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
     * @returns Product Ok
     * @throws ApiError
     */
    createProductForStoreInDepedence({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateProductFromSellerInDependeceDto;
    }): CancelablePromise<Product>;
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
                    price: number;
                    photo: string;
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
    getProductByPermalink({ storeId, permalink, productId, }: {
        storeId: string;
        permalink?: string;
        productId?: number;
    }): CancelablePromise<{
        Campaign: (Campaign & {
            listDiscount: Array<Discount>;
        });
        VariantCombo: Array<(VariantCombo & {
            Product: {
                name: string;
            };
        })>;
        ProductVariant: Array<(ProductVariant & {
            Product: {
                name: string;
            };
            PlatformVariant: PlatformVariant;
        })>;
        Review: Array<Review>;
        GoogleAnalytic: Array<{
            measurementId: string;
        }>;
        TiktokPixel: Array<{
            pixelId: string;
        }>;
        FbPixel: Array<{
            pixelId: string;
        }>;
        Tag: Array<Tag>;
        PlatformProduct: {
            variantOption: VariantOptions;
            id: number;
        };
        CrossSell: Array<(CrossSell & {
            Product: Array<(Product & {
                ProductVariant: Array<(ProductVariant & {
                    Product: {
                        name: string;
                    };
                })>;
            })>;
            Collection: Array<{
                Product: Array<(Product & {
                    ProductVariant: Array<(ProductVariant & {
                        Product: {
                            name: string;
                        };
                    })>;
                })>;
            }>;
        })>;
        updatedAt: string;
        createdAt: string;
        podTemplateId: number;
        campaignId: string;
        storeId: string;
        platformProductId: number;
        deleted: boolean;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        variantOption: VariantOptions;
        availableSet: AvailableSet;
        SKU: string;
        photos: Photos;
        details: string;
        description: string;
        permalink: string;
        name: string;
        id: number;
        Collection: any;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatusOrderItems({ storeId, variantIds, comboIds, }: {
        storeId: string;
        variantIds?: Array<number>;
        comboIds?: Array<number>;
    }): CancelablePromise<Array<any>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProduct({ storeId, productId, isGetAllPlatformProductStore, }: {
        storeId: string;
        productId: number;
        isGetAllPlatformProductStore?: boolean;
    }): CancelablePromise<(Product & {
        Campaign: (Campaign & {
            listDiscount: Array<Discount>;
        });
        VariantCombo: Array<VariantCombo>;
        ProductVariant: Array<(ProductVariant & {
            PlatformVariant: {
                cost: PlatformCostInfo;
                price: number;
                id: number;
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
    }): CancelablePromise<Product>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    cloneProduct({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: CloneProductDto;
    }): CancelablePromise<(Product & {
        ProductVariant: Array<{
            platformVariantId: number;
            name: string;
            id: number;
        }>;
    })>;
}
