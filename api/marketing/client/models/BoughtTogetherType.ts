/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from './_36_Enums_BoostSaleTriggerType';
import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
import type { NameDto } from './NameDto';
import type { PlacementBoostSaleEnum } from './PlacementBoostSaleEnum';
export type BoughtTogetherType = {
  kind: BoughtTogetherType.kind;
  title: NameDto;
  type: _36_Enums_BoostSaleTriggerType;
  rootProductId: number;
  childrenProductIds: Array<number>;
  discounts: Array<{
    value: number;
    productId: number;
    type: DiscountBoostSaleType;
  }>;
  placementList: Array<PlacementBoostSaleEnum>;
  timeLife: {
    endDate?: string;
    startDate: string;
  };
};
export namespace BoughtTogetherType {
  export enum kind {
    BOUGHT_TOGETHER = 'BoughtTogether',
  }
}

