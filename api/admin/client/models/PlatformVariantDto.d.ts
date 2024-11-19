import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
export type PlatformVariantDto = {
    name: string;
    photo: PhotoDto;
    price: number;
    supplierPrice: number;
    cost?: PrismaJson_PlatformCostInfo | null;
    SKU: string;
    variantOption: PrismaJson_VariantOptionValues;
};
