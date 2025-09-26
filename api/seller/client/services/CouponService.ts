/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export class CouponService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public listCoupons({
    storeId,
    searchTitle,
    types,
    statuses,
    applyingMethods,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: string,
    searchTitle?: string,
    types?: Array<_36_Enums_CouponType>,
    statuses?: Array<_36_Enums_CouponStatus>,
    applyingMethods?: Array<_36_Enums_CouponApplyingMethod>,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      discountUsed: number;
      discountValue: PrismaJson_ProductDiscountItems;
      combination: PrismaJson_CouponCombination;
      minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
      applyingMethod: _36_Enums_CouponApplyingMethod;
      discountCode: string;
      title: string;
      endDate: string;
      startDate: string;
      type: _36_Enums_CouponType;
      status: _36_Enums_CouponStatus;
      createdAt: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/coupons',
      path: {
        'storeId': storeId,
      },
      query: {
        'searchTitle': searchTitle,
        'types': types,
        'statuses': statuses,
        'applyingMethods': applyingMethods,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createCoupon({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateCouponDto,
  }): CancelablePromise<{
    isApplyToAllProduct: boolean;
    discountUsed: number;
    isLimitPerCustomer: boolean;
    isLimitTotalUsage: boolean;
    maxTotalUsage: number;
    discountValue: PrismaJson_ProductDiscountItems;
    combination: PrismaJson_CouponCombination;
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
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/coupons',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public deleteCoupons({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: DeleteCouponsDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/coupons',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateCoupon({
    storeId,
    couponId,
    requestBody,
  }: {
    storeId: string,
    couponId: string,
    requestBody: UpdateCouponDto,
  }): CancelablePromise<{
    isApplyToAllProduct: boolean;
    discountUsed: number;
    isLimitPerCustomer: boolean;
    isLimitTotalUsage: boolean;
    maxTotalUsage: number;
    discountValue: PrismaJson_ProductDiscountItems;
    combination: PrismaJson_CouponCombination;
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
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/coupons/{couponId}',
      path: {
        'storeId': storeId,
        'couponId': couponId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getCoupon({
    storeId,
    couponId,
  }: {
    storeId: string,
    couponId: string,
  }): CancelablePromise<({
    Products: Array<{
      photos: PrismaJson_Photos;
      isActive: boolean;
      name: string;
      id: number;
    }>;
  } & {
    isApplyToAllProduct: boolean;
    discountUsed: number;
    isLimitPerCustomer: boolean;
    isLimitTotalUsage: boolean;
    maxTotalUsage: number;
    discountValue: PrismaJson_ProductDiscountItems;
    combination: PrismaJson_CouponCombination;
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
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/coupons/{couponId}',
      path: {
        'storeId': storeId,
        'couponId': couponId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public updateCouponStatus({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateCouponStatusDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/coupons/status',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public duplicateCoupon({
    storeId,
    couponId,
  }: {
    storeId: string,
    couponId: string,
  }): CancelablePromise<{
    isApplyToAllProduct: boolean;
    discountUsed: number;
    isLimitPerCustomer: boolean;
    isLimitTotalUsage: boolean;
    maxTotalUsage: number;
    discountValue: PrismaJson_ProductDiscountItems;
    combination: PrismaJson_CouponCombination;
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
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/coupons/{couponId}/duplicate',
      path: {
        'storeId': storeId,
        'couponId': couponId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
