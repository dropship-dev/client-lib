/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoostSaleTriggerType } from './BoostSaleTriggerType';
import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
import type { NameDto } from './NameDto';
import type { PlacementBoostSaleEnum } from './PlacementBoostSaleEnum';

export type BoughtTogetherType = {
  kind: BoughtTogetherType.kind;
  title: NameDto;
  type: BoostSaleTriggerType;
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

