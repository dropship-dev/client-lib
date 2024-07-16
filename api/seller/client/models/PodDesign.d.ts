import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
/**
 * Model PodDesign
 */
export type PodDesign = {
    updatedAt: string;
    createdAt: string;
    isDraft: boolean;
    isDeleted: boolean;
    isActive: boolean;
    /**
     * [VariantOptions]
     */
    variantOption: PrismaJson_VariantOptions;
    sku: string | null;
    supplierContract: string | null;
    sizeGuide: string;
    description: string | null;
    name: string;
    storeId: string;
    podTemplateId: number;
    id: number;
};
