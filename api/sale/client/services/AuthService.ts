/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_SaleStatus } from '../models/_36_Enums_SaleStatus';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { LoginDto } from '../models/LoginDto';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { TrackingReferralDto } from '../models/TrackingReferralDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public login({
    requestBody,
  }: {
    requestBody: LoginDto,
  }): CancelablePromise<({
    maxOwnedStores: number;
    role: _36_Enums_UserRole;
    email: string;
    name: string;
    id: string;
    FulfillmentUser: Array<{
      FulfillmentAgency: {
        timezone: PrismaJson_Timezone;
        platformFee: number;
        type: _36_Enums_FulfillmentAgencyType;
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        executionTime: string;
        status: _36_Enums_FulfillmentAgencyStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
      };
    }>;
    SaleUser: {
      status: _36_Enums_SaleStatus;
    };
  } | {
    maxOwnedStores: number;
    role: _36_Enums_UserRole;
    email: string;
    name: string;
    id: string;
    FulfillmentUser: Array<{
      FulfillmentAgency: {
        timezone: PrismaJson_Timezone;
        platformFee: number;
        type: _36_Enums_FulfillmentAgencyType;
        costCalculationMethod: _36_Enums_CostCalculationMethod;
        executionTime: string;
        status: _36_Enums_FulfillmentAgencyStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
      };
    }>;
    SaleUser: {
      id: number;
    };
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns boolean Ok
   * @throws ApiError
   */
  public referralTracking({
    requestBody,
  }: {
    requestBody: TrackingReferralDto,
  }): CancelablePromise<boolean> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/referral-tracking',
      body: requestBody,
      mediaType: 'application/json',
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
  public signInPusher({
    requestBody,
  }: {
    requestBody: {
      authorization: string;
      channel_name: string;
      socket_id: string;
    },
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/pusher/user-auth',
      body: requestBody,
      mediaType: 'application/json',
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
  public signInSocket({
    requestBody,
  }: {
    requestBody: {
      authorization: string;
      appId: string;
      appName: string;
    },
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/socket/user-auth',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
