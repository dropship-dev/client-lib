/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountMinimumPurchaseRequirement } from './DiscountMinimumPurchaseRequirement';
import type { DiscountValueType } from './DiscountValueType';
import type { PrismaJson_CouponCombination } from './PrismaJson_CouponCombination';
export type UpdateCouponDto = {
  title?: string;
  productIds?: Array<number>;
  minimumPurchaseRequirement?: {
    value: number;
    label: DiscountMinimumPurchaseRequirement;
  } | null;
  discountValue?: {
    value: number;
    label: DiscountValueType;
  };
  combination?: PrismaJson_CouponCombination;
  maxTotalUsage?: number;
  isLimitPerCustomer?: boolean;
  isLimitTotalUsage?: boolean;
  isApplyToAllProduct?: boolean;
  startDate?: string;
  endDate?: string;
};

