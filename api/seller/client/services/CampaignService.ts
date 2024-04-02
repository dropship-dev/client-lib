/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campaign } from '../models/Campaign';
import type { CreateDiscountDto } from '../models/CreateDiscountDto';
import type { Discount } from '../models/Discount';
import type { UpdateCampaignDto } from '../models/UpdateCampaignDto';
import type { UpdateDiscountDto } from '../models/UpdateDiscountDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CampaignService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public deleteDiscount({
    storeId,
    campaignId,
    discountId,
    productIds,
  }: {
    storeId: string,
    campaignId: string,
    discountId: string,
    productIds: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/campaign/{campaignId}/discount/{discountId}',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
        'discountId': discountId,
      },
      query: {
        'productIds': productIds,
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
  public deleteManyDiscount({
    storeId,
    campaignId,
    discountId,
  }: {
    storeId: string,
    campaignId: string,
    discountId: Array<string>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/campaign/{campaignId}/discount',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
      },
      query: {
        'discountId': discountId,
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
  public createManyDiscount({
    storeId,
    campaignId,
    requestBody,
  }: {
    storeId: string,
    campaignId: string,
    requestBody: Array<CreateDiscountDto>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/campaign/{campaignId}/discount',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
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
  public updateManyDiscount({
    storeId,
    campaignId,
    requestBody,
  }: {
    storeId: string,
    campaignId: string,
    requestBody: Array<UpdateDiscountDto>,
  }): CancelablePromise<'OK' | 'Nothing to update'> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/campaign/{campaignId}/discount',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
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
  public updateCampaign({
    storeId,
    campaignId,
    requestBody,
  }: {
    storeId: string,
    campaignId: string,
    requestBody: UpdateCampaignDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/campaign/{campaignId}',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
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
  public deleteCampaign({
    storeId,
    campaignId,
  }: {
    storeId: string,
    campaignId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/campaign/{campaignId}',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
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
  public getCampaignById({
    storeId,
    campaignId,
  }: {
    storeId: string,
    campaignId: string,
  }): CancelablePromise<(Campaign & {
    listDiscount: Array<Discount>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/campaign/{campaignId}',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
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
  public deleteCampaignDeleted({
    storeId,
    campaignId,
    productId,
  }: {
    storeId: string,
    campaignId: string,
    productId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/product/{productId}/campaign/{campaignId}',
      path: {
        'storeId': storeId,
        'campaignId': campaignId,
        'productId': productId,
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
