import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
export type CreateVariantsDto = {
    name: NameDto;
    price: number;
    compareAtPrice: number;
    SKU: string;
    photo: PhotoDto;
    productId: number;
    supplierCost: number;
};
