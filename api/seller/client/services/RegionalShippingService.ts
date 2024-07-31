/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegionalShippingFee } from '../models/RegionalShippingFee';
import type { RegionalShippingFeeDto } from '../models/RegionalShippingFeeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegionalShippingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns RegionalShippingFee Ok
   * @throws ApiError
   */
  public createRegionalShippingFee({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: RegionalShippingFeeDto,
  }): CancelablePromise<RegionalShippingFee> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/regional-shipping-fee',
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
  public getAllRegionalShippingFee({
    storeId,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: string,
    search?: string,
    startDate?: string,
    endDate?: string,
    pageSize?: number,
    nextPageIndex?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<RegionalShippingFee>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/regional-shipping-fee',
      path: {
        'storeId': storeId,
      },
      query: {
        'search': search,
        'startDate': startDate,
        'endDate': endDate,
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
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
   * @returns RegionalShippingFee Ok
   * @throws ApiError
   */
  public getRegionalShippingFee({
    storeId,
    id,
  }: {
    storeId: string,
    id: string,
  }): CancelablePromise<RegionalShippingFee> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/regional-shipping-fee/{id}',
      path: {
        'storeId': storeId,
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
   * @returns RegionalShippingFee Ok
   * @throws ApiError
   */
  public deleteReasonShippingFee({
    storeId,
    id,
  }: {
    storeId: string,
    id: string,
  }): CancelablePromise<RegionalShippingFee> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/regional-shipping-fee/{id}',
      path: {
        'storeId': storeId,
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
   * @returns RegionalShippingFee Ok
   * @throws ApiError
   */
  public updateReasonShippingFee({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: string,
    requestBody: RegionalShippingFeeDto,
  }): CancelablePromise<RegionalShippingFee> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/regional-shipping-fee/{id}',
      path: {
        'storeId': storeId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public resetSetting({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/regional-shipping-fee/reset-setting',
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

}
