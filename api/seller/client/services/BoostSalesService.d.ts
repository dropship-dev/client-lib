import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { BoostSaleDto } from '../models/BoostSaleDto';
import type { Prisma_BatchPayload } from '../models/Prisma_BatchPayload';
import type { PrismaJson_AvailableSet } from '../models/PrismaJson_AvailableSet';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_VariantOptions } from '../models/PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class BoostSalesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createBoostSale({ storeId, requestBody, }: {
        storeId: string;
        requestBody: BoostSaleDto;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllBoostSale({ storeId, pageSize, nextPageIndex, startDate, endDate, search, crossSellType, crossSellStatus, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
        startDate?: string;
        endDate?: string;
        search?: string;
        crossSellType?: Array<_36_Enums_BoostSaleType>;
        crossSellStatus?: boolean;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<({
            Product: Array<{
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
            Collection: Array<({
                Product: Array<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getBoostSaleByPermalinkSideStore({ storeId, permalink, }: {
        storeId: string;
        permalink: string;
    }): CancelablePromise<{
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
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getBoostSales({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<({
        rootProduct: ({
            ProductVariant: Array<{
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
        });
        Product: Array<{
            ProductVariant: Array<{
                compareAtPrice: number;
                price: number;
            }>;
            isEnable: boolean;
            isActive: boolean;
            photos: PrismaJson_Photos;
            name: string;
            id: number;
        }>;
        Collection: Array<({
            Product: Array<{
                ProductVariant: Array<{
                    compareAtPrice: number;
                    price: number;
                }>;
                isEnable: boolean;
                isActive: boolean;
                photos: PrismaJson_Photos;
                name: string;
                id: number;
            }>;
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
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateBoostSales({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: BoostSaleDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteBoostSales({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusesBoostSales({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateCrossSellStatusDto;
    }): CancelablePromise<void>;
    /**
     * @returns Prisma_BatchPayload Ok
     * @throws ApiError
     */
    deleteManyBoostSales({ id, storeId, }: {
        id: Array<number>;
        storeId: string;
    }): CancelablePromise<Prisma_BatchPayload>;
}
