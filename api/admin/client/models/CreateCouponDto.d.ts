import type { _36_Enums_CouponApplyingMethod } from './_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from './_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from './_36_Enums_CouponType';
import type { DiscountMinimumPurchaseRequirement } from './DiscountMinimumPurchaseRequirement';
import type { DiscountValueType } from './DiscountValueType';
import type { PrismaJson_CouponCombination } from './PrismaJson_CouponCombination';
export type CreateCouponDto = {
    title: string;
    type: _36_Enums_CouponType;
    status?: _36_Enums_CouponStatus;
    discountCode?: string;
    applyingMethod: _36_Enums_CouponApplyingMethod;
    isApplyToAllProduct?: boolean;
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
    isLimitPerCustomer: boolean;
    isLimitTotalUsage: boolean;
    startDate: string;
    endDate?: string;
};
