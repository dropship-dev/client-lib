import type { VariantOptionValues } from './VariantOptionValues';
export type PodTemplateVariant = {
    isActive: boolean;
    variantOption: VariantOptionValues;
    faPrice: number;
    supplierCost: number;
    sku?: string;
    name: string;
};
