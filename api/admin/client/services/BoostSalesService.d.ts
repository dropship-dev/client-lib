import type { _36_Enums_BoostSaleTriggerType } from '../models/_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from '../models/_36_Enums_BoostSaleType';
import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { _36_Enums_MarketingType } from '../models/_36_Enums_MarketingType';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_DiscountBoostSale } from '../models/PrismaJson_DiscountBoostSale';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlacementBoostSaleType } from '../models/PrismaJson_PlacementBoostSaleType';
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
        id: number;
        BoostSale: Array<({
            Product: Array<{
                isActive: boolean;
                id: number;
                ProductVariant: Array<{
                    Product: {
                        name: string;
                        id: number;
                    };
                }>;
            }>;
            Collection: Array<{
                Product: Array<{
                    isActive: boolean;
                    name: string;
                    id: number;
                    ProductVariant: Array<{
                        Product: {
                            name: string;
                            id: number;
                        };
                    }>;
                }>;
            }>;
        } & {
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
        })>;
        Collection: Array<({
            BoostSale: Array<({
                Product: Array<{
                    isActive: boolean;
                    name: string;
                    id: number;
                    ProductVariant: Array<{
                        Product: {
                            name: string;
                            id: number;
                        };
                    }>;
                }>;
                Collection: Array<{
                    Product: Array<{
                        isActive: boolean;
                        name: string;
                        id: number;
                        ProductVariant: Array<{
                            Product: {
                                name: string;
                                id: number;
                            };
                        }>;
                    }>;
                }>;
            } & {
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
            })>;
        } & {
            SEO: any;
            condition: PrismaJson_ConditionCollection;
            photos: PrismaJson_Photos;
            description: string;
            type: _36_Enums_CollectionType;
            status: _36_Enums_CollectionStatus;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: number;
        })>;
    }>;
}
