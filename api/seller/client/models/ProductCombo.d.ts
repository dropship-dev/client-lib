import type { PrismaJson_ProductComboItems } from './PrismaJson_ProductComboItems';
/**
 * Model ProductCombo
 */
export type ProductCombo = {
    updatedAt: string;
    createdAt: string;
    productId: number;
    isEnable: boolean;
    isActive: boolean;
    /**
     * [ProductComboItems]
     */
    items: PrismaJson_ProductComboItems;
    SKU: string;
    compareAtPrice: number;
    photo: string;
    price: number;
    name: string;
    id: number;
};
