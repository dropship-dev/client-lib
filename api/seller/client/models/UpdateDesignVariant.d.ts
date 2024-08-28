import type { VariantOptionValues } from './VariantOptionValues';
export type UpdateDesignVariant = {
    isActive: boolean;
    minSellingPrice: number;
    variantOption: VariantOptionValues;
    comparePrice: number;
    price: number;
    sku?: string;
    podTemplateVariantId: number;
    id?: number;
};
