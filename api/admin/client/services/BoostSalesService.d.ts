import type { BoostSale } from '../models/BoostSale';
import type { Collection } from '../models/Collection';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class BoostSalesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getBoostSaleByPermalinkSideStore({ storeId, permalink, }: {
        storeId: string;
        permalink: string;
    }): CancelablePromise<{
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
        id: number;
    }>;
}
