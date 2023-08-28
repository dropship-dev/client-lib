import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
export type PlatformVariantDto = {
    name: NameDto;
    price: number;
    supplierPrice: number;
    photo: PhotoDto;
    SKU: string;
    variantOption: PrismaJson_VariantOptionValues;
};
