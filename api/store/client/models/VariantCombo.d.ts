import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';
/**
 * Model VariantCombo
 */
export type VariantCombo = {
    updatedAt: string;
    createdAt: string;
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
