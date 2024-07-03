import type { PrismaJson_PhotoDesign } from './PrismaJson_PhotoDesign';
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
    /**
     * [PhotoDesign]
     */
    photos: PrismaJson_PhotoDesign;
    storeId: string;
    podTemplateId: number;
    id: number;
};
