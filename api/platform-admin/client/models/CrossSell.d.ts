import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { PrismaJson_DiscountCrossSell } from './PrismaJson_DiscountCrossSell';
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
     * [DiscountCrossSell]
     */
    discount: PrismaJson_DiscountCrossSell | null;
    /**
     * [PlacementCrossSellType]
     */
    placement: PrismaJson_PlacementCrossSellType;
    status: boolean;
    type: CrossSellType;
    name: string;
    id: number;
};
