import type { BatchPayload } from '../models/BatchPayload';
import type { BoostSale } from '../models/BoostSale';
import type { BoostSaleDto } from '../models/BoostSaleDto';
import type { BoostSaleType } from '../models/BoostSaleType';
import type { Collection } from '../models/Collection';
import type { Photos } from '../models/Photos';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class BoostSalesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns BoostSale Ok
     * @throws ApiError
     */
    createBoostSale({ storeId, requestBody, }: {
        storeId: string;
        requestBody: BoostSaleDto;
    }): CancelablePromise<BoostSale>;
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
        crossSellType?: Array<BoostSaleType>;
        crossSellStatus?: boolean;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<(BoostSale & {
            Product: Array<Product>;
            Collection: Array<(Collection & {
                Product: Array<Product>;
            })>;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getBoostSales({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<(BoostSale & {
        rootProduct: (Product & {
            ProductVariant: Array<ProductVariant>;
        });
        Product: Array<{
            isEnable: boolean;
            isActive: boolean;
            photos: Photos;
            name: string;
            ProductVariant: Array<{
                compareAtPrice: number;
                price: number;
            }>;
            id: number;
        }>;
        Collection: Array<(Collection & {
            Product: Array<{
                isEnable: boolean;
                isActive: boolean;
                photos: Photos;
                name: string;
                ProductVariant: Array<{
                    compareAtPrice: number;
                    price: number;
                }>;
                id: number;
            }>;
        })>;
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
     * @returns BoostSale Ok
     * @throws ApiError
     */
    deleteBoostSales({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<BoostSale>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusesBoostSales({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateCrossSellStatusDto;
    }): CancelablePromise<void>;
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    deleteManyBoostSales({ id, storeId, }: {
        id: Array<number>;
        storeId: string;
    }): CancelablePromise<BatchPayload>;
}
