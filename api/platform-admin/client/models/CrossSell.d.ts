import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { MarketingType } from './MarketingType';
import type { PrismaJson_DiscountCrossSell } from './PrismaJson_DiscountCrossSell';
import type { PrismaJson_PlacementCrossSellType } from './PrismaJson_PlacementCrossSellType';
/**
 * Model CrossSell
 */
export type CrossSell = {
    rootProductId: number | null;
    updatedAt: string;
    createdAt: string;
    /**
     * time life cross sell
     */
    endDate: string | null;
    /**
     * time life cross sell
     */
    startDate: string;
    storeId: string;
    triggerBy: CrossSellTriggerType;
    marketingType: MarketingType | null;
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
