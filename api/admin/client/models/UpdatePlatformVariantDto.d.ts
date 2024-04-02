import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
export type UpdatePlatformVariantDto = {
    name?: NameDto;
    price?: number;
    supplierPrice?: number;
    photo?: PhotoDto;
    cost?: PrismaJson_PlatformCostInfo;
};
