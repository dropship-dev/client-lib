/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
    quantity: number;
    productId: number;
    type: DiscountBoostSaleType;
  }>;
  timeLife: {
    endDate?: string;
    startDate: string;
  };
};

export namespace DiscountForQuantityType {

  export enum kind {
    DISCOUNT_FOR_QUANTITY = 'DiscountForQuantity',
  }


}

