import type { PrismaJson_CustomVariantOptionValues } from './PrismaJson_CustomVariantOptionValues';
export type UpdateVariantDto = {
    name?: string;
    price?: number;
    compareAtPrice?: number;
    SKU?: string;
    photo?: string;
    supplierPrice?: number;
    customVariantOptions?: PrismaJson_CustomVariantOptionValues;
    displayName?: string;
};
