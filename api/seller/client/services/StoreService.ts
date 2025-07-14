/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CapabilityStatus } from '../models/_36_Enums_CapabilityStatus';
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_CouponApplyingMethod } from '../models/_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from '../models/_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from '../models/_36_Enums_CouponType';
import type { _36_Enums_FraudDetectionStatusType } from '../models/_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_FraudDetectionType } from '../models/_36_Enums_FraudDetectionType';
import type { _36_Enums_OnboardingStatus } from '../models/_36_Enums_OnboardingStatus';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_PPCPVettingStatus } from '../models/_36_Enums_PPCPVettingStatus';
import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { CreateCouponDto } from '../models/CreateCouponDto';
import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { DeleteCouponsDto } from '../models/DeleteCouponsDto';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { PrismaJson_CouponCombination } from '../models/PrismaJson_CouponCombination';
import type { PrismaJson_DataInformationsOnboarding } from '../models/PrismaJson_DataInformationsOnboarding';
import type { PrismaJson_OnboardingProducts } from '../models/PrismaJson_OnboardingProducts';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_ProductDiscountItems } from '../models/PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductRequirementItems } from '../models/PrismaJson_ProductRequirementItems';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_TypeOfFraudService } from '../models/PrismaJson_TypeOfFraudService';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { StoreData } from '../models/StoreData';
import type { StoreResourceAccess } from '../models/StoreResourceAccess';
import type { UpdateCouponDto } from '../models/UpdateCouponDto';
import type { UpdateCouponStatusDto } from '../models/UpdateCouponStatusDto';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StoreService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStore({
    requestBody,
  }: {
    requestBody: CreateStoreDto,
  }): CancelablePromise<{
    isConversionRate: boolean;
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    invitedDate: string;
    invitedById: number;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    closedAt: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    othersFee: number;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store',
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
  public getAllStores({
    fulfillmentAgencyId,
    pageSize = 20,
    status,
    periodFrom = '2023-01-01T00:00:00.000Z',
    nextPageIndex,
    name,
    userId,
    paymentGatewayIds,
    platformProductId,
    referralCode,
    fraudStatus,
  }: {
    fulfillmentAgencyId?: number,
    pageSize?: number,
    status?: Array<_36_Enums_StoreStatus>,
    periodFrom?: string,
    nextPageIndex?: string,
    name?: string,
    userId?: string,
    paymentGatewayIds?: Array<number>,
    platformProductId?: number,
    referralCode?: string,
    fraudStatus?: Array<FraudStatusType>,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      referralCode: string;
      primaryDomain: string;
      subDomain: string;
      closedAt: string;
      avatar: string;
      timezone: PrismaJson_Timezone;
      status: _36_Enums_StoreStatus;
      phone: string;
      email: string;
      name: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: string;
      FraudDetection: Array<{
        labels: PrismaJson_TypeOfFraudService;
        idempotencyKey: string;
        orderId: string;
        systemFraudDetect: _36_Enums_FraudDetectionStatusType;
        humanFraudDetect: _36_Enums_FraudDetectionStatusType;
        type: _36_Enums_FraudDetectionType;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
      }>;
      Wallet: Array<{
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        fulfillmentAgencyId: number;
        balanceUnavailable: PrismaJson_UnavailableBalance;
        payoutAmount: number;
        holdAmount: number;
        balanceDebt: number;
        balanceAvailable: number;
        balanceAmount: number;
        walletName: string;
        id: string;
      }>;
      FulfillmentAgency: {
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        name: string;
        Setting: {
          percentageCostPlatformFee: number;
        };
      };
      Payment: Array<{
        type: _36_Enums_PaymentType;
        name: string;
        id: number;
        PaymentOnboarding: {
          paymentId: number;
          dataInformationsOnboarding: PrismaJson_DataInformationsOnboarding;
          onboardingProducts: PrismaJson_OnboardingProducts;
          paypalPartnerReferralId: string;
          vettingRejectedAt: string;
          customCardProcessingStatus: _36_Enums_CapabilityStatus;
          PPCPCustomVettingStatus: _36_Enums_PPCPVettingStatus;
          oAuthIntegration: boolean;
          paymentReceivable: boolean;
          primaryEmailConfirmed: boolean;
          onboardingStatus: _36_Enums_OnboardingStatus;
          onboardingUrl: string;
          onboardingId: string;
          merchantEmail: string;
          merchantId: string;
          paymentType: _36_Enums_PaymentType;
          updatedAt: string;
          createdAt: string;
          isDeleted: boolean;
          storeId: string;
          fulfillmentAgencyId: number;
          id: number;
        };
      }>;
      StoreUser: Array<{
        role: _36_Enums_StoreRole;
      }>;
      userRole: _36_Enums_StoreRole;
      fraudStatus: FraudStatusType;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'pageSize': pageSize,
        'status': status,
        'periodFrom': periodFrom,
        'nextPageIndex': nextPageIndex,
        'name': name,
        'userId': userId,
        'paymentGatewayIds': paymentGatewayIds,
        'platformProductId': platformProductId,
        'referralCode': referralCode,
        'fraudStatus': fraudStatus,
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
   * @returns StoreData Ok
   * @throws ApiError
   */
  public getStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<StoreData> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}',
      path: {
        'storeId': storeId,
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
  public updateStore({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStoreDto,
  }): CancelablePromise<{
    isConversionRate: boolean;
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    invitedDate: string;
    invitedById: number;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    closedAt: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    othersFee: number;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}',
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
  public deleteStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    isConversionRate: boolean;
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    invitedDate: string;
    invitedById: number;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    closedAt: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    othersFee: number;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}',
      path: {
        'storeId': storeId,
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
  public updateStoreStatus({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: UpdateStoreStatusDto,
  }): CancelablePromise<{
    isConversionRate: boolean;
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    invitedDate: string;
    invitedById: number;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    closedAt: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    othersFee: number;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/status',
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
  public reactivateStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    isConversionRate: boolean;
    stripeDefaultPaymentMethodId: string;
    stripeCustomerId: string;
    warning: boolean;
    invitedDate: string;
    invitedById: number;
    currencyId: number;
    maxUsers: number;
    balance: number;
    referralCode: string;
    defaultBankAccount: string;
    shippingFeeAdditional: number;
    shippingFee: number;
    primaryDomain: string;
    subDomain: string;
    pageName: string;
    closedAt: string;
    country: string;
    zipCode: string;
    city: string;
    apartmentAddress: string;
    address: string;
    avatar: string;
    othersFee: number;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    timezone: PrismaJson_Timezone;
    type: _36_Enums_StoreType;
    status: _36_Enums_StoreStatus;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    fulfillmentAgencyId: number;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/status/reactivate',
      path: {
        'storeId': storeId,
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
  public getStorePaymentMethod({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<{
    isShowCompanyAddress: boolean;
    companyAddress: string;
    companyPhone: string;
    companyName: string;
    publishableKey: string;
    type: _36_Enums_PaymentType;
    email: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/payment-method',
      path: {
        'storeId': storeId,
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
  public getDebtPayment({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    balanceDebt: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/debt-payment',
      path: {
        'storeId': storeId,
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
  public getWarningStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    warning: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/warning',
      path: {
        'storeId': storeId,
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
  public toggleWarningStore({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/store/{storeId}/warning',
      path: {
        'storeId': storeId,
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
  public checkStoreResourceAccess({
    storeId,
    resourceName,
  }: {
    storeId: string,
    resourceName: StoreResourceAccess,
  }): CancelablePromise<{
    description: string;
    hasAccess: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/resource-access',
      path: {
        'storeId': storeId,
      },
      query: {
        'resourceName': resourceName,
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
}
