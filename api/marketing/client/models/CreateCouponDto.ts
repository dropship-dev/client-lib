/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CouponApplyingMethod } from './_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from './_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from './_36_Enums_CouponType';
import type { DiscountMaximumUses } from './DiscountMaximumUses';
import type { DiscountMinimumPurchaseRequirement } from './DiscountMinimumPurchaseRequirement';
import type { DiscountValueType } from './DiscountValueType';
import type { PrismaJson_CouponCombination } from './PrismaJson_CouponCombination';
export type CreateCouponDto = {
  title?: string;
  type: _36_Enums_CouponType;
  status?: _36_Enums_CouponStatus;
  discountCode?: string;
  applyingMethod: _36_Enums_CouponApplyingMethod;
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
  startDate: string;
  endDate?: string;
};

