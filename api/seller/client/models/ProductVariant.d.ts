import type { PrismaJson_CostInfo } from './PrismaJson_CostInfo';
import type { PrismaJson_MarginInfo } from './PrismaJson_MarginInfo';
/**
 * Model ProductVariant
 */
export type ProductVariant = {
    updatedAt: string;
    createdAt: string;
    /**
     * [MarginInfo]
     */
    margin: PrismaJson_MarginInfo | null;
    platformVariantId: number | null;
    productId: number;
    deleted: boolean;
    isEnable: boolean;
    isActive: boolean;
    /**
     * [CostInfo]
     */
    cost: PrismaJson_CostInfo | null;
    supplierPrice: number | null;
    minSellingPrice: number | null;
    compareAtPrice: number;
    price: number;
    SKU: string;
    photo: string;
    name: string;
    id: number;
};
