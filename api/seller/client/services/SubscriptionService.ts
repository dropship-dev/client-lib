/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_SubscriptionInterval } from '../models/_36_Enums_SubscriptionInterval';
import type { _36_Enums_SubscriptionStatus } from '../models/_36_Enums_SubscriptionStatus';
import type { _36_Enums_SubscriptionType } from '../models/_36_Enums_SubscriptionType';
import type { PayPlatformTransactionFeeDebtDto } from '../models/PayPlatformTransactionFeeDebtDto';
import type { PayPlatformTransactionFeeDto } from '../models/PayPlatformTransactionFeeDto';
import type { PaySubscriptionInvoiceDto } from '../models/PaySubscriptionInvoiceDto';
import type { PrismaJson_UpgradeSubscriptionPlan } from '../models/PrismaJson_UpgradeSubscriptionPlan';
import type { SubscribeToNewSubscriptionPlanDto } from '../models/SubscribeToNewSubscriptionPlanDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SubscriptionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public listSubscriptionPlans(): CancelablePromise<{
    features: Array<{
      availablePlans: Array<boolean>;
      description: string;
      name: string;
    }>;
    plans: Array<{
      platformTransactionFee: number;
      yearlyPrice: number;
      monthlyPrice: number;
      description: string;
      name: string;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/subscriptions',
      errors: {
        400: `Bad request`,
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
  public getCurrentStoreSubscription({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    startedAt: string;
    failedPTFCaptureTimes: number;
    needToPayPTF: boolean;
    upgradeSubscriptionPlan: {
      startDate: string;
      interval: _36_Enums_SubscriptionInterval;
      price: number;
      name: string;
      id: number;
    };
    subscriptionPlan: {
      nextChargeDate: string;
      endDate: string;
      startDate: string;
      daysLeftToRenewSubscription: number;
      interval: _36_Enums_SubscriptionInterval;
      price: number;
      status: string;
      name: string;
      id: number;
    };
    freeTrial: {
      endDate: string;
      freeTrialDaysLeft: number;
    };
    status: _36_Enums_SubscriptionStatus;
    type: _36_Enums_SubscriptionType;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/subscription',
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
  public changeNextSubscriptionPlan({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: PrismaJson_UpgradeSubscriptionPlan,
  }): CancelablePromise<{
    stripeSubscriptionStatus: string;
    stripeSubscriptionId: string;
    upgradeSubscriptionPlan: PrismaJson_UpgradeSubscriptionPlan;
    subscriptionPlanId: number;
    passRevenueCeiling: boolean;
    failedPTFCaptureTimes: number;
    lastPlatformFeeChargeAt: string;
    currentPlatformTransactionFee: number;
    nextChargeDate: string;
    paymentRetry: number;
    freeTrialDays: number;
    interval: _36_Enums_SubscriptionInterval;
    type: _36_Enums_SubscriptionType;
    status: _36_Enums_SubscriptionStatus;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/subscription/change-plan',
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
  public getStorePlatformTransactionFee({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    currentPlanTransactionFeePercent: number;
    totalPlatformFee: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/subscription/platform-transaction-fee',
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
  public paySubscriptionAndPlatformTransactionFees({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: PayPlatformTransactionFeeDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/subscription/platform-transaction-fee',
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
  public getCurrentStoreRevenueAndPtf({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    currentPlanTransactionFeePercent: number;
    platformRevenueCeiling: number;
    totalPlatformFee: number;
    storeRevenue: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/subscription/revenue',
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
  public getSubscriptionAndPlatformTransactionFeeDebt({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    totalPlatformFee: number;
    subscriptionPlan: {
      name: string;
    };
    subscriptionFee: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/subscription/debt-before-closing',
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
  public paySubscriptionAndPlatformTransactionFeesDebt({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: PayPlatformTransactionFeeDebtDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/subscription/pay-debt-before-closing',
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
  public paySubscriptionInvoice({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: PaySubscriptionInvoiceDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/subscription/pay-subscription-invoice',
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
  public subscribeToANewSubscriptionPlan({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: SubscribeToNewSubscriptionPlanDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/subscription/subscribe-to-a-new-plan',
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
