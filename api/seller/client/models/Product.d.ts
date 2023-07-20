import type { PrismaJson_Photos } from './PrismaJson_Photos';
/**
 * Model Product
 */
export type Product = {
    updatedAt: string;
    createdAt: string;
    storeId: string;
    platformProductId: number;
    isEnable: boolean;
    isActive: boolean;
    shippingFeeAdditional: number;
    shippingFee: number;
    /**
     * [Photos]
     */
    photos: PrismaJson_Photos;
    details: string;
    description: string;
    name: string;
    id: number;
};
