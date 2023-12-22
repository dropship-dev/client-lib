import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
/**
 * Model Product
 */
export type Product = {
    updatedAt: string;
    createdAt: string;
    campaignId: string | null;
    storeId: string;
    platformProductId: number;
    deleted: boolean;
    isEnable: boolean;
    isActive: boolean;
    shippingFeeAdditional: number;
    shippingFee: number;
    /**
     * [AvailableSet]
     */
    availableSet: PrismaJson_AvailableSet | null;
    SKU: string;
    /**
     * [Photos]
     */
    photos: PrismaJson_Photos;
    details: string;
    description: string;
    permalink: string;
    name: string;
    id: number;
};
