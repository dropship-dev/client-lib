import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
export type UpdateVariantsForSellerInDependenceDto = {
    id: number;
    name: string;
    photo: PhotoDto;
    price: number;
    supplierPrice: number;
    compareAtPrice: number;
    SKU: string;
    variantOption: PrismaJson_VariantOptionValues;
};