/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoostSaleTriggerType } from './BoostSaleTriggerType';
import type { BoostSaleType } from './BoostSaleType';
import type { MarketingType } from './MarketingType';
import type { PrismaJson_DiscountBoostSale } from './PrismaJson_DiscountBoostSale';
import type { PrismaJson_PlacementBoostSaleType } from './PrismaJson_PlacementBoostSaleType';

/**
 * Model BoostSale
 */
export type BoostSale = {
  rootProductId: number | null;
  updatedAt: string;
  createdAt: string;
  /**
   * time life cross sell
   */
  endDate: string | null;
  /**
   * time life cross sell
   */
  startDate: string;
  marketingType: MarketingType | null;
  storeId: string;
  triggerBy: BoostSaleTriggerType;
  /**
   * [DiscountBoostSale]
   */
  discount: PrismaJson_DiscountBoostSale | null;
  /**
   * [PlacementBoostSaleType]
   */
  placement: PrismaJson_PlacementBoostSaleType;
  status: boolean;
  type: BoostSaleType;
  name: string;
  id: number;
};

