import type { _36_Enums_BoostSaleTriggerType } from './_36_Enums_BoostSaleTriggerType';
import type { NameDto } from './NameDto';
import type { PlacementBoostSaleEnum } from './PlacementBoostSaleEnum';
export type RelatedProductType = {
    kind: RelatedProductType.kind;
    title: NameDto;
    type: _36_Enums_BoostSaleTriggerType;
    ids: Array<number>;
    placementList: Array<PlacementBoostSaleEnum>;
    timeLife: {
        endDate?: string;
        startDate: string;
    };
};
export declare namespace RelatedProductType {
    enum kind {
        RELATED_PRODUCT = "RelatedProduct"
    }
}
