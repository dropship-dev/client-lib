import type { VariantOptionValues } from './VariantOptionValues';
export type PodTemplateVariantData = {
    isActive: boolean;
    variantOption: VariantOptionValues;
    faPrice?: number;
    supplierCost?: number;
    sku?: string;
    name: string;
};
