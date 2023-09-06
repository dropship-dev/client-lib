import type { PrismaJson_ProductComboItems } from './PrismaJson_ProductComboItems';
export type UpdateCombosDto = Array<{
    items?: PrismaJson_ProductComboItems;
    photo?: string;
    SKU?: string;
    compareAtPrice?: number;
    price?: number;
    name?: string;
    id: number;
}>;
