import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
/**
 * Model PlatformVariant
 */
export type PlatformVariant = {
    updatedAt: string;
    createdAt: string;
    platformProductId: number;
    isEnable: boolean;
    isActive: boolean;
    /**
     * [PlatformCostInfo]
     */
    cost: PrismaJson_PlatformCostInfo | null;
    supplierPrice: number;
    price: number;
    /**
     * [VariantOptionValues]
     */
    variantOption: PrismaJson_VariantOptionValues;
    SKU: string;
    photo: string;
    name: string;
    id: number;
};
