import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
export type UpdatePlatformVariantsDto = Array<{
    photo?: PhotoDto;
    supplierPrice?: number;
    price?: number;
    name?: NameDto;
    id: number;
}>;
