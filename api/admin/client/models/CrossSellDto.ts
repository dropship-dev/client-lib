/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { DiscountCrossSell } from './DiscountCrossSell';
import type { NameDto } from './NameDto';
import type { PlacementCrossSellEnum } from './PlacementCrossSellEnum';

export type CrossSellDto = {
  name: NameDto;
  type: CrossSellType;
  discount: DiscountCrossSell;
  triggerBy: CrossSellTriggerType;
  placement: Array<PlacementCrossSellEnum>;
  idProduct?: Array<number>;
  idCollection?: Array<number>;
};

