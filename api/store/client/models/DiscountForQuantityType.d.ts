import type { BoostSaleTriggerType } from './BoostSaleTriggerType';
import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
import type { NameDto } from './NameDto';
import type { PlacementBoostSaleEnum } from './PlacementBoostSaleEnum';
export type DiscountForQuantityType = {
    kind: DiscountForQuantityType.kind;
    title: NameDto;
    type: BoostSaleTriggerType;
    ids: Array<number>;
    placementList: Array<PlacementBoostSaleEnum>;
    discounts: Array<{
        value: number;
        productId: number;
        type: DiscountBoostSaleType;
    }>;
    timeLife: {
        endDate?: string;
        startDate: string;
    };
};
export declare namespace DiscountForQuantityType {
    enum kind {
        DISCOUNT_FOR_QUANTITY = "DiscountForQuantity"
    }
}
