import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { NameDto } from './NameDto';
import type { PlacementCrossSellEnum } from './PlacementCrossSellEnum';
export type BoughtTogetherType = {
    kind: BoughtTogetherType.kind;
    title: NameDto;
    type: CrossSellTriggerType;
    ids: Array<number>;
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
