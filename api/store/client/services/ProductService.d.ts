import type { AdminTag } from '../models/AdminTag';
import type { Campaign } from '../models/Campaign';
import type { Discount } from '../models/Discount';
import type { getStatusCombosType } from '../models/getStatusCombosType';
import type { getVariantsType } from '../models/getVariantsType';
import type { PlatformCostInfo } from '../models/PlatformCostInfo';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
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
}
