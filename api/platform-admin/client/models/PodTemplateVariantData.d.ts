import type { TemplateVariantOptionValues } from './TemplateVariantOptionValues';
export type PodTemplateVariantData = {
    isActive: boolean;
    variantOption: TemplateVariantOptionValues;
    faPrice?: number;
    supplierCost?: number;
    sku?: string;
    name: string;
};
