import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { CloneProductDto } from '../models/CloneProductDto';
import type { CreateProductFromSellerInDependenceDto } from '../models/CreateProductFromSellerInDependenceDto';
import type { getStatusCombosType } from '../models/getStatusCombosType';
import type { getVariantsType } from '../models/getVariantsType';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_ProductDiscountItems } from '../models/PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductRequirementItems } from '../models/PrismaJson_ProductRequirementItems';
import type { PrismaJson_VariantComboItems } from '../models/PrismaJson_VariantComboItems';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { Product } from '../models/Product';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { UpdateProductStatusDto } from '../models/UpdateProductStatusDto';
import type { UpdateProductStatusesDto } from '../models/UpdateProductStatusesDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ProductService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createProductForStoreInDependence({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateProductFromSellerInDependenceDto;
    }): CancelablePromise<{
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
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
        data: Array<({
            Campaign: {
                userUpdated: string;
                userCreated: string;
                endDate: string;
                startDate: string;
                label: string;
                status: boolean;
                updatedAt: string;
                createdAt: string;
                id: string;
            };
            VariantCombo: Array<{
                items: PrismaJson_VariantComboItems;
                minSellingPrice: number;
                compareAtPrice: number;
                productId: number;
                supplierCost: number;
                price: number;
                photo: string;
                isEnable: boolean;
                isActive: boolean;
                SKU: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                id: number;
            }>;
            ProductVariant: Array<({
                PlatformVariant: {
                    price: number;
                    photo: string;
                    isEnable: boolean;
                    isActive: boolean;
                    variantOption: PrismaJson_VariantOptionValues;
                    platformProductId: number;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    id: number;
                };
            } & {
                podDesignVariantId: number;
                platformVariantId: number;
                margin: PrismaJson_MarginInfo;
                minSellingPrice: number;
                compareAtPrice: number;
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                isActive: boolean;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            })>;
            Tag: Array<{
                name: string;
                updatedAt: string;
                createdAt: string;
                storeId: string;
                id: number;
            }>;
            PlatformProduct: {
                variantOption: PrismaJson_VariantOptions;
                Tag: Array<{
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    fulfillmentAgencyId: number;
                    id: number;
                }>;
            };
        } & {
            podTemplateId: number;
            campaignId: string;
            isEnable: boolean;
            isActive: boolean;
            supplierContact: string;
            variantOption: PrismaJson_VariantOptions;
            availableSet: PrismaJson_AvailableSet;
            SKU: string;
            details: string;
            permalink: string;
            deleted: boolean;
            platformProductId: number;
            description: string;
            photos: PrismaJson_Photos;
            shippingFeeAdditional: number;
            shippingFee: number;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
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
    updateProductStatuses({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateProductStatusesDto;
    }): CancelablePromise<Array<{
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductByPermalink({ storeId, permalink, productId, }: {
        storeId: string;
        permalink?: string;
        productId?: number;
    }): CancelablePromise<{
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        Campaign: ({
            listDiscount: Array<{
                requirementDiscount: PrismaJson_ProductRequirementItems;
                typeDiscount: PrismaJson_ProductDiscountItems;
                position: number;
                userUpdated: string;
                userCreated: string;
                label: string;
                campaignId: string;
                updatedAt: string;
                createdAt: string;
                id: string;
            }>;
        } & {
            userUpdated: string;
            userCreated: string;
            endDate: string;
            startDate: string;
            label: string;
            status: boolean;
            updatedAt: string;
            createdAt: string;
            id: string;
        });
        VariantCombo: Array<({
            Product: {
                platformProductId: number;
                name: string;
            };
        } & {
            items: PrismaJson_VariantComboItems;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            supplierCost: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            SKU: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            id: number;
        })>;
        ProductVariant: Array<({
            PlatformVariant: {
                groupPlatformVariantId: number;
                cost: PrismaJson_PlatformCostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                isActive: boolean;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                platformProductId: number;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
            Product: {
                platformProductId: number;
                name: string;
            };
        } & {
            podDesignVariantId: number;
            platformVariantId: number;
            margin: PrismaJson_MarginInfo;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            deleted: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        })>;
        Review: Array<{
            comment: string;
            rating: number;
            productId: number;
            photos: PrismaJson_Photos;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        }>;
        BoostSale: Array<({
            Product: Array<({
                ProductVariant: Array<({
                    Product: {
                        name: string;
                        id: number;
                    };
                } & {
                    podDesignVariantId: number;
                    platformVariantId: number;
                    margin: PrismaJson_MarginInfo;
                    minSellingPrice: number;
                    compareAtPrice: number;
                    productId: number;
                    cost: PrismaJson_CostInfo;
                    supplierPrice: number;
                    price: number;
                    photo: string;
                    isEnable: boolean;
                    isActive: boolean;
                    variantOption: PrismaJson_VariantOptionValues;
                    SKU: string;
                    deleted: boolean;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    id: number;
                })>;
            } & {
                podTemplateId: number;
                campaignId: string;
                isEnable: boolean;
                isActive: boolean;
                supplierContact: string;
                variantOption: PrismaJson_VariantOptions;
                availableSet: PrismaJson_AvailableSet;
                SKU: string;
                details: string;
                permalink: string;
                deleted: boolean;
                platformProductId: number;
                description: string;
                photos: PrismaJson_Photos;
                shippingFeeAdditional: number;
                shippingFee: number;
                name: string;
                updatedAt: string;
                createdAt: string;
                storeId: string;
                id: number;
            })>;
            Collection: Array<{
                Product: Array<({
                    ProductVariant: Array<({
                        Product: {
                            name: string;
                            id: number;
                        };
                    } & {
                        podDesignVariantId: number;
                        platformVariantId: number;
                        margin: PrismaJson_MarginInfo;
                        minSellingPrice: number;
                        compareAtPrice: number;
                        productId: number;
                        cost: PrismaJson_CostInfo;
                        supplierPrice: number;
                        price: number;
                        photo: string;
                        isEnable: boolean;
                        isActive: boolean;
                        variantOption: PrismaJson_VariantOptionValues;
                        SKU: string;
                        deleted: boolean;
                        name: string;
                        updatedAt: string;
                        createdAt: string;
                        id: number;
                    })>;
                } & {
                    podTemplateId: number;
                    campaignId: string;
                    isEnable: boolean;
                    isActive: boolean;
                    supplierContact: string;
                    variantOption: PrismaJson_VariantOptions;
                    availableSet: PrismaJson_AvailableSet;
                    SKU: string;
                    details: string;
                    permalink: string;
                    deleted: boolean;
                    platformProductId: number;
                    description: string;
                    photos: PrismaJson_Photos;
                    shippingFeeAdditional: number;
                    shippingFee: number;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    storeId: string;
                    id: number;
                })>;
            }>;
        } & {
            rootProductId: number;
            triggerBy: _36_Enums_BoostSaleTriggerType;
            marketingType: _36_Enums_MarketingType;
            placement: PrismaJson_PlacementBoostSaleType;
            endDate: string;
            startDate: string;
            discount: PrismaJson_DiscountBoostSale;
            type: _36_Enums_BoostSaleType;
            status: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        })>;
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
        Tag: Array<{
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        }>;
        Collection: Array<({
            BoostSale: Array<({
                Product: Array<({
                    ProductVariant: Array<({
                        Product: {
                            name: string;
                            id: number;
                        };
                    } & {
                        podDesignVariantId: number;
                        platformVariantId: number;
                        margin: PrismaJson_MarginInfo;
                        minSellingPrice: number;
                        compareAtPrice: number;
                        productId: number;
                        cost: PrismaJson_CostInfo;
                        supplierPrice: number;
                        price: number;
                        photo: string;
                        isEnable: boolean;
                        isActive: boolean;
                        variantOption: PrismaJson_VariantOptionValues;
                        SKU: string;
                        deleted: boolean;
                        name: string;
                        updatedAt: string;
                        createdAt: string;
                        id: number;
                    })>;
                } & {
                    podTemplateId: number;
                    campaignId: string;
                    isEnable: boolean;
                    isActive: boolean;
                    supplierContact: string;
                    variantOption: PrismaJson_VariantOptions;
                    availableSet: PrismaJson_AvailableSet;
                    SKU: string;
                    details: string;
                    permalink: string;
                    deleted: boolean;
                    platformProductId: number;
                    description: string;
                    photos: PrismaJson_Photos;
                    shippingFeeAdditional: number;
                    shippingFee: number;
                    name: string;
                    updatedAt: string;
                    createdAt: string;
                    storeId: string;
                    id: number;
                })>;
                Collection: Array<{
                    Product: Array<({
                        ProductVariant: Array<({
                            Product: {
                                name: string;
                                id: number;
                            };
                        } & {
                            podDesignVariantId: number;
                            platformVariantId: number;
                            margin: PrismaJson_MarginInfo;
                            minSellingPrice: number;
                            compareAtPrice: number;
                            productId: number;
                            cost: PrismaJson_CostInfo;
                            supplierPrice: number;
                            price: number;
                            photo: string;
                            isEnable: boolean;
                            isActive: boolean;
                            variantOption: PrismaJson_VariantOptionValues;
                            SKU: string;
                            deleted: boolean;
                            name: string;
                            updatedAt: string;
                            createdAt: string;
                            id: number;
                        })>;
                    } & {
                        podTemplateId: number;
                        campaignId: string;
                        isEnable: boolean;
                        isActive: boolean;
                        supplierContact: string;
                        variantOption: PrismaJson_VariantOptions;
                        availableSet: PrismaJson_AvailableSet;
                        SKU: string;
                        details: string;
                        permalink: string;
                        deleted: boolean;
                        platformProductId: number;
                        description: string;
                        photos: PrismaJson_Photos;
                        shippingFeeAdditional: number;
                        shippingFee: number;
                        name: string;
                        updatedAt: string;
                        createdAt: string;
                        storeId: string;
                        id: number;
                    })>;
                }>;
            } & {
                rootProductId: number;
                triggerBy: _36_Enums_BoostSaleTriggerType;
                marketingType: _36_Enums_MarketingType;
                placement: PrismaJson_PlacementBoostSaleType;
                endDate: string;
                startDate: string;
                discount: PrismaJson_DiscountBoostSale;
                type: _36_Enums_BoostSaleType;
                status: boolean;
                name: string;
                updatedAt: string;
                createdAt: string;
                storeId: string;
                id: number;
            })>;
        } & {
            SEO: any;
            condition: PrismaJson_ConditionCollection;
            description: string;
            photos: PrismaJson_Photos;
            type: _36_Enums_CollectionType;
            status: _36_Enums_CollectionStatus;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        })>;
        PlatformProduct: {
            variantOption: PrismaJson_VariantOptions;
            id: number;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getProductByPermalinkSideStore({ storeId, permalink, }: {
        storeId: string;
        permalink: string;
    }): CancelablePromise<{
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        Campaign: ({
            listDiscount: Array<{
                requirementDiscount: PrismaJson_ProductRequirementItems;
                typeDiscount: PrismaJson_ProductDiscountItems;
                position: number;
                userUpdated: string;
                userCreated: string;
                label: string;
                campaignId: string;
                updatedAt: string;
                createdAt: string;
                id: string;
            }>;
        } & {
            userUpdated: string;
            userCreated: string;
            endDate: string;
            startDate: string;
            label: string;
            status: boolean;
            updatedAt: string;
            createdAt: string;
            id: string;
        });
        VariantCombo: Array<({
            Product: {
                platformProductId: number;
                name: string;
            };
        } & {
            items: PrismaJson_VariantComboItems;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            supplierCost: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            SKU: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            id: number;
        })>;
        ProductVariant: Array<({
            PlatformVariant: {
                groupPlatformVariantId: number;
                cost: PrismaJson_PlatformCostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                isActive: boolean;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                platformProductId: number;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
            Product: {
                platformProductId: number;
                name: string;
            };
        } & {
            podDesignVariantId: number;
            platformVariantId: number;
            margin: PrismaJson_MarginInfo;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            deleted: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        })>;
        Review: Array<{
            comment: string;
            rating: number;
            productId: number;
            photos: PrismaJson_Photos;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        }>;
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
        Tag: Array<{
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        }>;
        PlatformProduct: {
            variantOption: PrismaJson_VariantOptions;
            id: number;
        };
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
        discount: PrismaJson_DiscountBoostSale;
        Product: Array<{
            id: number;
        }>;
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
    }): CancelablePromise<({
        Campaign: ({
            listDiscount: Array<{
                requirementDiscount: PrismaJson_ProductRequirementItems;
                typeDiscount: PrismaJson_ProductDiscountItems;
                position: number;
                userUpdated: string;
                userCreated: string;
                label: string;
                campaignId: string;
                updatedAt: string;
                createdAt: string;
                id: string;
            }>;
        } & {
            userUpdated: string;
            userCreated: string;
            endDate: string;
            startDate: string;
            label: string;
            status: boolean;
            updatedAt: string;
            createdAt: string;
            id: string;
        });
        VariantCombo: Array<{
            items: PrismaJson_VariantComboItems;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            supplierCost: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            SKU: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            id: number;
        }>;
        ProductVariant: Array<({
            PlatformVariant: {
                cost: PrismaJson_PlatformCostInfo;
                price: number;
                id: number;
            };
        } & {
            podDesignVariantId: number;
            platformVariantId: number;
            margin: PrismaJson_MarginInfo;
            minSellingPrice: number;
            compareAtPrice: number;
            productId: number;
            cost: PrismaJson_CostInfo;
            supplierPrice: number;
            price: number;
            photo: string;
            isEnable: boolean;
            isActive: boolean;
            variantOption: PrismaJson_VariantOptionValues;
            SKU: string;
            deleted: boolean;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        })>;
        Tag: Array<{
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        }>;
        PlatformProduct: {
            variantOption: PrismaJson_VariantOptions;
            Tag: Array<{
                name: string;
                updatedAt: string;
                createdAt: string;
                fulfillmentAgencyId: number;
                id: number;
            }>;
        };
    } & {
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateProduct({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: UpdateProductDto;
    }): CancelablePromise<{
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
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
    }): CancelablePromise<({
        ProductVariant: Array<{
            platformVariantId: number;
            name: string;
            id: number;
        }>;
    } & {
        podTemplateId: number;
        campaignId: string;
        isEnable: boolean;
        isActive: boolean;
        supplierContact: string;
        variantOption: PrismaJson_VariantOptions;
        availableSet: PrismaJson_AvailableSet;
        SKU: string;
        details: string;
        permalink: string;
        deleted: boolean;
        platformProductId: number;
        description: string;
        photos: PrismaJson_Photos;
        shippingFeeAdditional: number;
        shippingFee: number;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>;
}
