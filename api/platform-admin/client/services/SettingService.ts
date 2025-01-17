/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpsertRevenueLimitDto } from '../models/UpsertRevenueLimitDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getPlatformRevenueLimit(): CancelablePromise<{
    revenueCeiling: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/setting/revenue-limit',
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
  public updatePlatformRevenueLimit({
    requestBody,
  }: {
    requestBody: UpsertRevenueLimitDto,
  }): CancelablePromise<{
    numberValue: number;
    key: string;
    type: 'REVENUE_LIMIT';
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/setting/revenue-limit',
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
