import type { _36_Enums_CouponApplyingMethod } from './_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from './_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from './_36_Enums_CouponType';
export type ListCouponsQueryParams = {
    searchTitle?: string;
    type?: _36_Enums_CouponType;
    status?: _36_Enums_CouponStatus;
    applyingMethod?: _36_Enums_CouponApplyingMethod;
    pageSize?: number;
    nextPageIndex?: string;
};
