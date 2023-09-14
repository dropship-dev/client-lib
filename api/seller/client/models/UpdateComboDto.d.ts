import type { PrismaJson_ProductComboItems } from './PrismaJson_ProductComboItems';
export type UpdateComboDto = {
    name?: string;
    price?: number;
    compareAtPrice?: number;
    SKU?: string;
    photo?: string;
    items?: PrismaJson_ProductComboItems;
};
