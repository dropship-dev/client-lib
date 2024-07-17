import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
/**
 * Model GroupPlatformVariant
 */
export type GroupPlatformVariant = {
    updatedAt: string;
    createdAt: string;
    platformProductId: number;
    /**
     * [PlatformCostInfo]
     */
    cost: PrismaJson_PlatformCostInfo;
    name: string;
    id: number;
};
