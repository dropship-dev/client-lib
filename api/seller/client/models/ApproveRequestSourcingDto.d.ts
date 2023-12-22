import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
export type ApproveRequestSourcingDto = {
    platformProductId: number;
    platfromVariants?: Array<{
        cost: PrismaJson_PlatformCostInfo;
        id: number;
    }>;
    description?: string;
    productId?: number;
};
