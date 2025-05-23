/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_BoostSaleTriggerType } from './_36_Enums_BoostSaleTriggerType';
import type { _36_Enums_BoostSaleType } from './_36_Enums_BoostSaleType';
import type { _36_Enums_MarketingType } from './_36_Enums_MarketingType';
import type { PrismaJson_DiscountBoostSale } from './PrismaJson_DiscountBoostSale';
import type { PrismaJson_PlacementBoostSaleType } from './PrismaJson_PlacementBoostSaleType';
export type DefaultSelection_Prisma__36_BoostSalePayload_ = {
  rootProductId: number;
  triggerBy: _36_Enums_BoostSaleTriggerType;
  marketingType: _36_Enums_MarketingType;
  placement: PrismaJson_PlacementBoostSaleType;
  endDate: string;
  startDate: string;
  type: _36_Enums_BoostSaleType;
  status: boolean;
  name: string;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: number;
  discount: PrismaJson_DiscountBoostSale;
};

