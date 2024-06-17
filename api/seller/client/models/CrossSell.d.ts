import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_PlacementCrossSellType } from './PrismaJson_PlacementCrossSellType';
/**
 * Model CrossSell
 */
export type CrossSell = {
    updatedAt: string;
    createdAt: string;
    storeId: string;
    triggerBy: CrossSellTriggerType;
    /**
     * DiscountCrossSell
     */
    discount: Prisma_JsonValue | null;
    /**
     * [PlacementCrossSellType]
     */
    placement: PrismaJson_PlacementCrossSellType;
    status: boolean;
    type: CrossSellType;
    name: string;
    id: number;
};
