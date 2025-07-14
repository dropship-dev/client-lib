/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_HoldSetting } from '../models/PrismaJson_HoldSetting';
import type { PrismaJson_SettingPayoutRequestDay } from '../models/PrismaJson_SettingPayoutRequestDay';
import type { PrismaJson_SettingPayoutRequestTime } from '../models/PrismaJson_SettingPayoutRequestTime';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getSetting({
    fulfillmentAgencyId,
    storeId,
  }: {
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<({
    receiverRequestDay: PrismaJson_SettingPayoutRequestDay;
    receiverRequestTime: PrismaJson_SettingPayoutRequestTime;
    isDeductedProfit: boolean;
    serviceFee: number;
    othersFee: number;
    percentageCostPlatformFee: number;
    hold: PrismaJson_HoldSetting;
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  } | {
    shippingPolicy: string;
    termsOfService: string;
    refundPolicy: string;
    privacyPolicy: string;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/setting',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'storeId': storeId,
      },
      errors: {
        400: `Bad request`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
