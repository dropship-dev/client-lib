import type { AdminTag } from '../models/AdminTag';
import type { AvailableSet } from '../models/AvailableSet';
import type { BoostSale } from '../models/BoostSale';
import type { Campaign } from '../models/Campaign';
import type { Collection } from '../models/Collection';
import type { Discount } from '../models/Discount';
import type { DiscountBoostSale } from '../models/DiscountBoostSale';
import type { getStatusCombosType } from '../models/getStatusCombosType';
import type { getVariantsType } from '../models/getVariantsType';
import type { Photos } from '../models/Photos';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { Review } from '../models/Review';
import type { Tag } from '../models/Tag';
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
    getAllProduct({ storeId, pageSize, nextPageIndex, name, tags, isActive, startPrice, endPrice, isCheckRootProductCrossSell, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
        name?: string;
        tags?: Array<string>;
        isActive?: boolean;
        startPrice?: number;
        endPrice?: number;
        isCheckRootProductCrossSell?: boolean;
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
                platformProductId: number;
                name: string;
            };
        })>;
        ProductVariant: Array<(ProductVariant & {
            Product: {
                platformProductId: number;
                name: string;
            };
            PlatformVariant: PlatformVariant;
        })>;
        Review: Array<Review>;
        GoogleTagManager: Array<{
            tag: string;
        }>;
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
        BoostSale: Array<(BoostSale & {
            Product: Array<(Product & {
                ProductVariant: Array<(ProductVariant & {
                    Product: {
                        name: string;
                        id: number;
                    };
                })>;
            })>;
            Collection: Array<{
                Product: Array<(Product & {
                    ProductVariant: Array<(ProductVariant & {
                        Product: {
                            name: string;
                            id: number;
                        };
                    })>;
                })>;
            }>;
        })>;
        Collection: Array<(Collection & {
            BoostSale: Array<(BoostSale & {
                Product: Array<(Product & {
                    ProductVariant: Array<(ProductVariant & {
                        Product: {
                            name: string;
                            id: number;
                        };
                    })>;
                })>;
                Collection: Array<{
                    Product: Array<(Product & {
                        ProductVariant: Array<(ProductVariant & {
                            Product: {
                                name: string;
                                id: number;
                            };
                        })>;
                    })>;
                }>;
            })>;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductByPermalinkSideStore({ storeId, permalink, }: {
        storeId: string;
        permalink: string;
    }): CancelablePromise<{
        Campaign: (Campaign & {
            listDiscount: Array<Discount>;
        });
        VariantCombo: Array<(VariantCombo & {
            Product: {
                platformProductId: number;
                name: string;
            };
        })>;
        ProductVariant: Array<(ProductVariant & {
            Product: {
                platformProductId: number;
                name: string;
            };
            PlatformVariant: PlatformVariant;
        })>;
        Review: Array<Review>;
        GoogleTagManager: Array<{
            tag: string;
        }>;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatusOrderItems({ storeId, variantIds, comboIds, }: {
        storeId: string;
        variantIds?: Array<number>;
        comboIds?: Array<number>;
    }): CancelablePromise<Array<(getVariantsType | getStatusCombosType)>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatusBoostSale({ storeId, boostSaleIds, }: {
        storeId: string;
        boostSaleIds: Array<number>;
    }): CancelablePromise<Array<{
        discount: DiscountBoostSale;
        status: boolean;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getUpSellByProductIds({ storeId, productIds, }: {
        storeId: string;
        productIds: Array<number>;
    }): CancelablePromise<Array<{
        upSellId: number;
        productId: number;
    }>>;
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
}
