import type { AdminTag } from '../models/AdminTag';
import type { Campaign } from '../models/Campaign';
import type { CloneProductDto } from '../models/CloneProductDto';
import type { CreateProductFromSellerInDependenceDto } from '../models/CreateProductFromSellerInDependenceDto';
import type { Discount } from '../models/Discount';
import type { getStatusCombosType } from '../models/getStatusCombosType';
import type { getVariantsType } from '../models/getVariantsType';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
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
    createProductForStoreInDependence({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateProductFromSellerInDependenceDto;
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
     * @returns void
     * @throws ApiError
     */
    getProductByPermalink({ storeId, permalink, productId, }: {
        storeId: string;
        permalink?: string;
        productId?: number;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatusOrderItems({ storeId, variantIds, comboIds, crossSellId, }: {
        storeId: string;
        variantIds?: Array<number>;
        comboIds?: Array<number>;
        crossSellId?: Array<number>;
    }): CancelablePromise<Array<(getVariantsType | getStatusCombosType)>>;
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
