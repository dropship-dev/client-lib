import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
export type UpdateVariantDto = {
    name?: NameDto;
    price?: number;
    photo?: PhotoDto;
};
