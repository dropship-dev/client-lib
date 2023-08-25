import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
export type UpdatePlatformProductDto = {
    name?: NameDto;
    description?: string;
    details?: string;
    photos?: Array<PhotoDto>;
    supplierContact?: string;
    variantOption?: PrismaJson_VariantOptions;
    tags?: Array<string>;
};
