/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CouponApplyingMethod } from './_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponType } from './_36_Enums_CouponType';
import type { PrismaJson_CouponCombination } from './PrismaJson_CouponCombination';
import type { PrismaJson_ProductRequirementItems } from './PrismaJson_ProductRequirementItems';
export type CouponApplyToOrder = {
  isLimitPerCustomer: boolean;
  isLimitTotalUsage: boolean;
  applyingMethod: _36_Enums_CouponApplyingMethod;
  discountValue: PrismaJson_ProductRequirementItems | null;
  minimumPurchaseRequirement: PrismaJson_ProductRequirementItems | null;
  type: _36_Enums_CouponType;
  discountCode: string | null;
  title: string | null;
  combination: PrismaJson_CouponCombination;
  value: number;
  id: string;
};

