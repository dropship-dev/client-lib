import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';
export type UpdateCombosDto = Array<{
    items?: PrismaJson_VariantComboItems;
    photo?: string;
    SKU?: string;
    compareAtPrice?: number;
    minSellingPrice?: number;
    price?: number;
    name?: string;
    id: number;
}>;