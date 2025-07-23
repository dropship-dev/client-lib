import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { GetBoostSalesDto } from '../models/GetBoostSalesDto';
import type { GetCrossSellByProductDto } from '../models/GetCrossSellByProductDto';
import type { PrismaJson_BillingInfo } from '../models/PrismaJson_BillingInfo';
import type { PrismaJson_CostInfo } from '../models/PrismaJson_CostInfo';
import type { PrismaJson_CustomVariantOptionValues } from '../models/PrismaJson_CustomVariantOptionValues';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_MarginInfo } from '../models/PrismaJson_MarginInfo';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
import type { PrismaJson_VariantOptionValues } from '../models/PrismaJson_VariantOptionValues';
import type { SuggestionResponseDto } from '../models/SuggestionResponseDto';
import type { UpdateOrderDto } from '../models/UpdateOrderDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        clientSecret: string;
        orderId: string;
        id: string;
        timeExpired: number;
        token: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateStoreOrder({ storeId, tokenClientInfo, requestBody, }: {
        storeId: string;
        tokenClientInfo: string;
        requestBody: UpdateOrderDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    previewStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        freeShipInfo: {
            value?: number;
            status: boolean;
        };
        total: number;
        discountInfo: {
            value: number;
            label: string;
        };
        subTotal: number;
        shippingFee: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    firstTimePreviewInit({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        taxable: boolean;
        totalAfterTax: number;
        taxNote: string;
        taxRate: number;
        tax: number;
        freeShipInfo: {
            value?: number;
            status?: boolean;
        };
        total: number;
        discountInfo: {
            value?: number;
            label?: string;
        };
        subTotal: number;
        shippingFee: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    suggestionCrossSell({ storeId, requestBody, }: {
        storeId: string;
        requestBody: Array<GetCrossSellByProductDto>;
    }): CancelablePromise<Array<{
        suggestionProduct: Array<{
            isEnable: boolean;
            permalink: string;
            deleted: boolean;
            photos: PrismaJson_Photos;
            isActive: boolean;
            name: string;
            id: number;
            ProductVariant: Array<{
                podDesignVariantId: number;
                platformVariantId: number;
                margin: PrismaJson_MarginInfo;
                minSellingPrice: number;
                compareAtPrice: number;
                displayName: string;
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                customVariantOption: PrismaJson_CustomVariantOptionValues;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                isActive: boolean;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            }>;
        }>;
        rootProductId: number;
        triggerBy: _36_Enums_BoostSaleTriggerType;
        marketingType: _36_Enums_MarketingType;
        placement: PrismaJson_PlacementBoostSaleType;
        endDate: string;
        startDate: string;
        type: _36_Enums_BoostSaleType;
        status: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        discount: PrismaJson_DiscountBoostSale;
        Product: Array<{
            isEnable: boolean;
            permalink: string;
            deleted: boolean;
            photos: PrismaJson_Photos;
            isActive: boolean;
            name: string;
            id: number;
            ProductVariant: Array<{
                podDesignVariantId: number;
                platformVariantId: number;
                margin: PrismaJson_MarginInfo;
                minSellingPrice: number;
                compareAtPrice: number;
                displayName: string;
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                customVariantOption: PrismaJson_CustomVariantOptionValues;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                isActive: boolean;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            }>;
        }>;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    suggestionCrossSellV2({ storeId, productId, isRootProduct, }: {
        storeId: string;
        productId?: Array<number>;
        isRootProduct?: Array<boolean>;
    }): CancelablePromise<Array<{
        suggestionProduct: Array<{
            isEnable: boolean;
            permalink: string;
            deleted: boolean;
            photos: PrismaJson_Photos;
            isActive: boolean;
            name: string;
            id: number;
            ProductVariant: Array<{
                podDesignVariantId: number;
                platformVariantId: number;
                margin: PrismaJson_MarginInfo;
                minSellingPrice: number;
                compareAtPrice: number;
                displayName: string;
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                customVariantOption: PrismaJson_CustomVariantOptionValues;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                isActive: boolean;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            }>;
        }>;
        rootProductId: number;
        triggerBy: _36_Enums_BoostSaleTriggerType;
        marketingType: _36_Enums_MarketingType;
        placement: PrismaJson_PlacementBoostSaleType;
        endDate: string;
        startDate: string;
        type: _36_Enums_BoostSaleType;
        status: boolean;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        discount: PrismaJson_DiscountBoostSale;
        Product: Array<{
            isEnable: boolean;
            permalink: string;
            deleted: boolean;
            photos: PrismaJson_Photos;
            isActive: boolean;
            name: string;
            id: number;
            ProductVariant: Array<{
                podDesignVariantId: number;
                platformVariantId: number;
                margin: PrismaJson_MarginInfo;
                minSellingPrice: number;
                compareAtPrice: number;
                displayName: string;
                productId: number;
                cost: PrismaJson_CostInfo;
                supplierPrice: number;
                price: number;
                photo: string;
                isEnable: boolean;
                customVariantOption: PrismaJson_CustomVariantOptionValues;
                variantOption: PrismaJson_VariantOptionValues;
                SKU: string;
                deleted: boolean;
                isActive: boolean;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            }>;
        }>;
    }>>;
    /**
     * @returns SuggestionResponseDto Ok
     * @throws ApiError
     */
    suggestionBoostSale({ storeId, requestBody, }: {
        storeId: string;
        requestBody: Array<GetBoostSalesDto>;
    }): CancelablePromise<Array<SuggestionResponseDto>>;
    /**
     * @returns SuggestionResponseDto Ok
     * @throws ApiError
     */
    suggestionBoostSaleV2({ storeId, productId, boostSaleId, }: {
        storeId: string;
        productId?: Array<number>;
        boostSaleId?: Array<number>;
    }): CancelablePromise<Array<SuggestionResponseDto>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    captureStoreOrder({ storeId, orderId, paymentType, requestBody, }: {
        storeId: string;
        orderId: string;
        paymentType: _36_Enums_PaymentType;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        shippingFee: number;
        discount: number;
        subTotal: number;
        total: number;
        billingInfo: PrismaJson_BillingInfo;
        shippingInfo: PrismaJson_BillingInfo;
        status: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCustomerInfoForThankYouPage({ storeId, orderId, }: {
        storeId: string;
        orderId: string;
    }): CancelablePromise<{
        billingInfo: PrismaJson_BillingInfo;
        shippingInfo: PrismaJson_BillingInfo;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRevenueOrder({ orderId, storeId, }: {
        orderId: string;
        storeId: string;
    }): CancelablePromise<{
        total: number;
    }>;
}
