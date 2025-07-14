import type { DesignVariantOptionValues } from './DesignVariantOptionValues';
export type DesignVariant = {
    isActive: boolean;
    minSellingPrice: number;
    variantOption: DesignVariantOptionValues;
    comparePrice: number;
    price: number;
    sku: string;
    podTemplateVariantId: number;
};
