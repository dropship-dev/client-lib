/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSubscriptionFeatureDto } from '../models/CreateSubscriptionFeatureDto';
import type { CreateSubscriptionPlanDto } from '../models/CreateSubscriptionPlanDto';
import type { Partial_CreateSubscriptionFeatureDto_ } from '../models/Partial_CreateSubscriptionFeatureDto_';
import type { SubscriptionFeature } from '../models/SubscriptionFeature';
import type { SubscriptionPlan } from '../models/SubscriptionPlan';

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
   * @returns SubscriptionPlan Ok
   * @throws ApiError
   */
  public createSubscriptionPlan({
    requestBody,
  }: {
    requestBody: CreateSubscriptionPlanDto,
  }): CancelablePromise<SubscriptionPlan> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscriptions',
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
   * @returns SubscriptionFeature Ok
   * @throws ApiError
   */
  public listSubscriptionFeatures(): CancelablePromise<Array<SubscriptionFeature>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/subscriptions/features',
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * @returns SubscriptionFeature Ok
   * @throws ApiError
   */
  public createSubscriptionFeature({
    requestBody,
  }: {
    requestBody: CreateSubscriptionFeatureDto,
  }): CancelablePromise<SubscriptionFeature> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscriptions/features',
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
   * @returns void
   * @throws ApiError
   */
  public getSubscriptionPlan({
    id,
  }: {
    id: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/subscriptions/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * @returns void
   * @throws ApiError
   */
  public updateSubscriptionPlan({
    id,
  }: {
    id: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/subscriptions/{id}',
      path: {
        'id': id,
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
  public seedSubscriptionPlans(): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscriptions/seeding',
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
  public apply14DayFreeTrialForExistedStores({
    requestBody,
  }: {
    requestBody: {
      storeIds: Array<string>;
    },
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subscriptions/apply-14-day-free-trial',
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
   * @returns SubscriptionFeature Ok
   * @throws ApiError
   */
  public updateSubscriptionFeature({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: Partial_CreateSubscriptionFeatureDto_,
  }): CancelablePromise<SubscriptionFeature> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/subscriptions/features/{id}',
      path: {
        'id': id,
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
   * @returns void
   * @throws ApiError
   */
  public deleteSubscriptionFeature({
    id,
  }: {
    id: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/subscriptions/features/{id}',
      path: {
        'id': id,
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