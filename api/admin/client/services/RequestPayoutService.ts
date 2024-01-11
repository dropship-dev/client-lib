/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestPayoutDto } from '../models/CreateRequestPayoutDto';
import type { RequestPayout } from '../models/RequestPayout';
import type { UpdateRequestPayoutDto } from '../models/UpdateRequestPayoutDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RequestPayoutService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns RequestPayout Ok
   * @throws ApiError
   */
  public createRequestPayout({
    requestBody,
  }: {
    requestBody: CreateRequestPayoutDto,
  }): CancelablePromise<RequestPayout> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-payout',
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
  public getAllRequestPayout({
    storeId,
    fulfillmentAgencyId,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
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
    data: Array<RequestPayout>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns RequestPayout Ok
   * @throws ApiError
   */
  public getRequestPayout({
    storeId,
    id,
  }: {
    storeId: string,
    id: string,
  }): CancelablePromise<RequestPayout> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-payout/{id}',
      path: {
        'id': id,
      },
      query: {
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
   * @returns RequestPayout Ok
   * @throws ApiError
   */
  public updateRequestPayout({
    id,
    fulfillmentAgencyId,
    requestBody,
  }: {
    id: string,
    fulfillmentAgencyId: number,
    requestBody: UpdateRequestPayoutDto,
  }): CancelablePromise<RequestPayout> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/request-payout/{id}',
      path: {
        'id': id,
      },
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
