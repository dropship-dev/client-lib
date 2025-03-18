import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
export type CreateVariantsDto = {
    name: NameDto;
    price: number;
    compareAtPrice: number;
    SKU: string;
    photo: PhotoDto;
    productId: number;
    supplierPrice: number;
    variantOption?: PrismaJson_VariantOptionValues;
};
