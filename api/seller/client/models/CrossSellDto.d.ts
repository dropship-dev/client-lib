import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { DiscountCrossSell } from './DiscountCrossSell';
import type { NameDto } from './NameDto';
import type { PlacementCrossSellType } from './PlacementCrossSellType';
export type CrossSellDto = {
    name: NameDto;
    type: CrossSellType;
    discount: DiscountCrossSell;
    triggerBy: CrossSellTriggerType;
    placement: PlacementCrossSellType;
    idProduct?: Array<number>;
    idCollection?: Array<number>;
};
