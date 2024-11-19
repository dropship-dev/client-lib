import type { NameDto } from './NameDto';
import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
export type UpdateGroupPlatformVariantsDto = {
    name?: NameDto;
    deletedVariants?: Array<number>;
    cost?: PrismaJson_PlatformCostInfo;
};
