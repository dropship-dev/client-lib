import type { _36_Enums_CouponApplyingMethod } from './_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from './_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from './_36_Enums_CouponType';
export type ListCouponsQueryParams = {
    searchTitle?: string;
    types?: Array<_36_Enums_CouponType>;
    statuses?: Array<_36_Enums_CouponStatus>;
    applyingMethods?: Array<_36_Enums_CouponApplyingMethod>;
    pageSize?: number;
    nextPageIndex?: string;
};
