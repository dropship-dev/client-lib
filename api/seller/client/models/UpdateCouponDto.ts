/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CouponApplyingMethod } from './_36_Enums_CouponApplyingMethod';
import type { DiscountMaximumUses } from './DiscountMaximumUses';
import type { DiscountMinimumPurchaseRequirement } from './DiscountMinimumPurchaseRequirement';
import type { DiscountValueType } from './DiscountValueType';
import type { PrismaJson_CouponCombination } from './PrismaJson_CouponCombination';
export type UpdateCouponDto = {
  title?: string;
  discountCode?: string;
  applyingMethod?: _36_Enums_CouponApplyingMethod;
  productIds?: Array<number>;
  minimumPurchaseRequirement?: {
    value: number;
    label: DiscountMinimumPurchaseRequirement;
  };
  maximumDiscountUses?: {
    value: number;
    label: DiscountMaximumUses;
  };
  discountValue?: {
    value: number;
    label: DiscountValueType;
  };
  combination?: PrismaJson_CouponCombination;
  startDate?: string;
  endDate?: string;
};

