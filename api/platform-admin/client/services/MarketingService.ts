/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MarketingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createMarketingAccount({
    requestBody,
  }: {
    requestBody: CreateMarketingAccount,
  }): CancelablePromise<{
    subscriptionId: string;
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: _36_Enums_UserRole;
    invitedById: string;
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
      method: 'POST',
      url: '/marketing',
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
