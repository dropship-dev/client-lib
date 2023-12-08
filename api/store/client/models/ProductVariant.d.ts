import type { PrismaJson_CostInfo } from './PrismaJson_CostInfo';
/**
 * Model ProductVariant
 */
export type ProductVariant = {
    updatedAt: string;
    createdAt: string;
    platformVariantId: number;
    productId: number;
    deleted: boolean;
    isEnable: boolean;
    isActive: boolean;
    /**
     * [CostInfo]
     */
    cost: PrismaJson_CostInfo | null;
    minSellingPrice: number | null;
    compareAtPrice: number;
    price: number;
    SKU: string;
    photo: string;
    name: string;
    id: number;
};
