/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyRole } from '../models/_36_Enums_FulfillmentAgencyRole';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { ChangeUserPasswordDto } from '../models/ChangeUserPasswordDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentUser } from '../models/FulfillmentUser';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { User } from '../models/User';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getUser(): CancelablePromise<(User & {
    FulfillmentUser: Array<(FulfillmentUser & {
      FulfillmentAgency: (FulfillmentAgency & {
        Wallet: Array<Wallet>;
      });
    })>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user',
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
  public updateUser({
    requestBody,
  }: {
    requestBody: UpdateUserDto,
  }): CancelablePromise<({
    FulfillmentUser: Array<({
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
    } & {
      isOwner: boolean;
      userId: string;
      role: _36_Enums_FulfillmentAgencyRole;
      updatedAt: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: number;
    })>;
  } & {
    subscriptionId: string;
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: _36_Enums_UserRole;
    country: string;
    avatar: string;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: string;
  })> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user',
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
  public deleteUser(): CancelablePromise<{
    subscriptionId: string;
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: _36_Enums_UserRole;
    country: string;
    avatar: string;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/user',
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
  public changeUserPassword({
    requestBody,
  }: {
    requestBody: ChangeUserPasswordDto,
  }): CancelablePromise<{
    subscriptionId: string;
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: _36_Enums_UserRole;
    country: string;
    avatar: string;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user/password',
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
