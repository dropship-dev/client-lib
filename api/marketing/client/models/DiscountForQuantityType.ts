/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from './_36_Enums_BoostSaleTriggerType';
import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
import type { NameDto } from './NameDto';
import type { PlacementBoostSaleEnum } from './PlacementBoostSaleEnum';
export type DiscountForQuantityType = {
  kind: DiscountForQuantityType.kind;
  title: NameDto;
  type: _36_Enums_BoostSaleTriggerType;
  ids: Array<number>;
  placementList: Array<PlacementBoostSaleEnum>;
  discounts: Array<{
    isToShowCompareAtPrice?: boolean;
    highlightBadge?: 'Most Popular' | 'Most Value' | 'Best Choice' | 'Recommended';
    offerLabel?: string;
    subtitle?: string;
    title: string;
    index: number;
    value: number;
    quantity: number;
    type: DiscountBoostSaleType;
  }>;
  timeLife: {
    endDate?: string | null;
    startDate: string;
  };
};
export namespace DiscountForQuantityType {
  export enum kind {
    DISCOUNT_FOR_QUANTITY = 'DiscountForQuantity',
  }
}

