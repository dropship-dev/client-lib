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
    supplierPriceSet10: number | null;
    supplierPriceSet9: number | null;
    supplierPriceSet8: number | null;
    supplierPriceSet7: number | null;
    supplierPriceSet6: number | null;
    supplierPriceSet5: number | null;
    supplierPriceSet4: number | null;
    supplierPriceSet3: number | null;
    supplierPriceSet2: number | null;
    supplierPrice: number;
    priceSet10: number | null;
    priceSet9: number | null;
    priceSet8: number | null;
    priceSet7: number | null;
    priceSet6: number | null;
    priceSet5: number | null;
    priceSet4: number | null;
    priceSet3: number | null;
    priceSet2: number | null;
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
