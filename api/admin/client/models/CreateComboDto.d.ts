import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_ProductComboItems } from './PrismaJson_ProductComboItems';
export type CreateComboDto = {
    name: NameDto;
    price: number;
    compareAtPrice: number;
    SKU: string;
    photo: PhotoDto;
    productId: number;
    items: PrismaJson_ProductComboItems;
};
