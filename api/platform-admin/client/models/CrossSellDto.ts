/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { NameDto } from './NameDto';
import type { PlacementCrossSellEnum } from './PlacementCrossSellEnum';
import type { PrismaJson_DiscountCrossSell } from './PrismaJson_DiscountCrossSell';

export type CrossSellDto = {
  name: NameDto;
  type: CrossSellType;
  discount?: PrismaJson_DiscountCrossSell;
  triggerBy: CrossSellTriggerType;
  placement: Array<PlacementCrossSellEnum>;
  idProduct?: Array<number>;
  idCollection?: Array<number>;
};

