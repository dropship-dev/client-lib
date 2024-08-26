import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { DiscountCrossSellType } from './DiscountCrossSellType';
import type { NameDto } from './NameDto';
import type { PlacementCrossSellEnum } from './PlacementCrossSellEnum';
export type BoughtTogetherType = {
    kind: BoughtTogetherType.kind;
    title: NameDto;
    type: CrossSellTriggerType;
    rootProductId: number;
    childrenProductIds: Array<number>;
    discounts: Array<{
        value: number;
        productId: number;
        type: DiscountCrossSellType;
    }>;
    placementList: Array<PlacementCrossSellEnum>;
    timeLife: {
        endDate?: string;
        startDate: string;
    };
};
export declare namespace BoughtTogetherType {
    enum kind {
        BOUGHT_TOGETHER = "BoughtTogether"
    }
}
