import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';
export type CreateComboDto = {
    name: NameDto;
    price: number;
    compareAtPrice: number;
    SKU: string;
    photo: PhotoDto;
    items: PrismaJson_VariantComboItems;
};
