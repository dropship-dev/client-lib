/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_UpgradeSubscriptionPlan } from '../models/PrismaJson_UpgradeSubscriptionPlan';
import type { Subscription } from '../models/Subscription';
import type { SubscriptionInterval } from '../models/SubscriptionInterval';
import type { SubscriptionType } from '../models/SubscriptionType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getCurrentStoreSubscription({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    upgradeSubscriptionPlan: {
      startDate: string;
      interval: SubscriptionInterval;
      price: number;
      name: string;
    };
    subscriptionPlan: {
      nextChargeDate: string;
      endDate: string;
      startDate: string;
      daysLeftToRenewSubscription: number;
      interval: SubscriptionInterval;
      price: number;
      status: string;
      name: string;
    };
    freeTrial: {
      startDate: string;
      freeTrialDaysLeft: number;
    };
    type: SubscriptionType;
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
   * @returns Subscription Ok
   * @throws ApiError
   */
  public changeNextSubscriptionPlan({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: PrismaJson_UpgradeSubscriptionPlan,
  }): CancelablePromise<Subscription> {
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

}
