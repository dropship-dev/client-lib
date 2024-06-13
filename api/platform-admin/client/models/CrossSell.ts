/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { CrossSellType } from './CrossSellType';
import type { PlacementCrossSellType } from './PlacementCrossSellType';
import type { PrismaJson_DiscountCrossSell } from './PrismaJson_DiscountCrossSell';

/**
 * Model CrossSell
 */
export type CrossSell = {
  updatedAt: string;
  createdAt: string;
  storeId: string;
  triggerBy: CrossSellTriggerType;
  /**
   * [DiscountCrossSell]
   */
  discount: PrismaJson_DiscountCrossSell | null;
  placement: PlacementCrossSellType;
  status: boolean;
  type: CrossSellType;
  name: string;
  id: number;
};

