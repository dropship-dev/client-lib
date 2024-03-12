import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';
/**
 * Model VariantCombo
 */
export type VariantCombo = {
    isDeleted: boolean;
    updatedAt: string;
    createdAt: string;
    supplierCost: number | null;
    minSellingPrice: number | null;
    productId: number;
    isEnable: boolean;
    isActive: boolean;
    /**
     * [VariantComboItems]
     */
    items: PrismaJson_VariantComboItems;
    SKU: string;
    compareAtPrice: number;
    photo: string;
    price: number;
    name: string;
    id: number;
};
