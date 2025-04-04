/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_HoldSetting } from '../models/PrismaJson_HoldSetting';
import type { UpdateSettingDto } from '../models/UpdateSettingDto';
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
    isDeductedProfit: boolean;
    serviceFee: number;
    percentageCostPlatformFee: number;
    hold: PrismaJson_HoldSetting;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    othersFee: number;
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
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateSetting({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: UpdateSettingDto,
  }): CancelablePromise<{
    isDeductedProfit: boolean;
    serviceFee: number;
    percentageCostPlatformFee: number;
    hold: PrismaJson_HoldSetting;
    shippingPolicy: string;
    termsOfService: string;
    privacyPolicy: string;
    refundPolicy: string;
    othersFee: number;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/setting/{id}',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
