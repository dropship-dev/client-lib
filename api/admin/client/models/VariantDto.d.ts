import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
export type VariantDto = {
    name: NameDto;
    photo: PhotoDto;
    price: number;
    supplierPrice: number;
    compareAtPrice: number;
    SKU: string;
    variantOption: PrismaJson_VariantOptionValues;
};
