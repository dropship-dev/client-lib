import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';
export type UpdateComboDto = {
    name?: string;
    price?: number;
    compareAtPrice?: number;
    SKU?: string;
    photo?: string;
    supplierCost?: number;
    items?: PrismaJson_VariantComboItems;
};
