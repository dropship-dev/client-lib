import type { _36_Enums_CouponApplyingMethod } from '../models/_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from '../models/_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from '../models/_36_Enums_CouponType';
import type { CreateCouponDto } from '../models/CreateCouponDto';
import type { DeleteCouponsDto } from '../models/DeleteCouponsDto';
import type { PrismaJson_CouponCombination } from '../models/PrismaJson_CouponCombination';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_ProductDiscountItems } from '../models/PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductRequirementItems } from '../models/PrismaJson_ProductRequirementItems';
import type { UpdateCouponDto } from '../models/UpdateCouponDto';
import type { UpdateCouponStatusDto } from '../models/UpdateCouponStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CouponService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listCoupons({ storeId, searchTitle, types, statuses, applyingMethods, pageSize, nextPageIndex, }: {
        storeId: string;
        searchTitle?: string;
        types?: Array<_36_Enums_CouponType>;
        statuses?: Array<_36_Enums_CouponStatus>;
        applyingMethods?: Array<_36_Enums_CouponApplyingMethod>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            applyingMethod: _36_Enums_CouponApplyingMethod;
            title: string;
            endDate: string;
            startDate: string;
            type: _36_Enums_CouponType;
            status: _36_Enums_CouponStatus;
            createdAt: string;
            id: string;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCoupon({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateCouponDto;
    }): CancelablePromise<{
        availableDiscountUse: number;
        discountValue: PrismaJson_ProductDiscountItems;
        combination: PrismaJson_CouponCombination;
        maximumDiscountUses: PrismaJson_ProductRequirementItems;
        minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
        applyingMethod: _36_Enums_CouponApplyingMethod;
        discountCode: string;
        title: string;
        userUpdated: string;
        userCreated: string;
        endDate: string;
        startDate: string;
        type: _36_Enums_CouponType;
        status: _36_Enums_CouponStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCoupons({ storeId, requestBody, }: {
        storeId: string;
        requestBody: DeleteCouponsDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCoupon({ storeId, couponId, requestBody, }: {
        storeId: string;
        couponId: string;
        requestBody: UpdateCouponDto;
    }): CancelablePromise<{
        availableDiscountUse: number;
        discountValue: PrismaJson_ProductDiscountItems;
        combination: PrismaJson_CouponCombination;
        maximumDiscountUses: PrismaJson_ProductRequirementItems;
        minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
        applyingMethod: _36_Enums_CouponApplyingMethod;
        discountCode: string;
        title: string;
        userUpdated: string;
        userCreated: string;
        endDate: string;
        startDate: string;
        type: _36_Enums_CouponType;
        status: _36_Enums_CouponStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCoupon({ storeId, couponId, }: {
        storeId: string;
        couponId: string;
    }): CancelablePromise<({
        Products: Array<{
            isActive: boolean;
            photos: PrismaJson_Photos;
            name: string;
            id: number;
        }>;
    } & {
        availableDiscountUse: number;
        discountValue: PrismaJson_ProductDiscountItems;
        combination: PrismaJson_CouponCombination;
        maximumDiscountUses: PrismaJson_ProductRequirementItems;
        minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
        applyingMethod: _36_Enums_CouponApplyingMethod;
        discountCode: string;
        title: string;
        userUpdated: string;
        userCreated: string;
        endDate: string;
        startDate: string;
        type: _36_Enums_CouponType;
        status: _36_Enums_CouponStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateCouponStatus({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateCouponStatusDto;
    }): CancelablePromise<string>;
}
