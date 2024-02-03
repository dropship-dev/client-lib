/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostCalculationMethod } from '../models/CostCalculationMethod';
import type { CreateFulfillmentAgencyDto } from '../models/CreateFulfillmentAgencyDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentAgencyStatus } from '../models/FulfillmentAgencyStatus';
import type { Timezone } from '../models/Timezone';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { UpdateFulfillmentAgencyStatusDto } from '../models/UpdateFulfillmentAgencyStatusDto';
import type { Wallet } from '../models/Wallet';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FulfillmentAgencyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns FulfillmentAgency Ok
   * @throws ApiError
   */
  public createFulfillmentAgency({
    requestBody,
  }: {
    requestBody: CreateFulfillmentAgencyDto,
  }): CancelablePromise<FulfillmentAgency> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/fulfillment-agency',
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
  public getAllFulfillmentAgency({
    userId,
    search,
    pageSize = 20,
    nextPageIndex,
  }: {
    userId?: string,
    search?: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      Wallet: Array<Wallet>;
      updatedAt: string;
      createdAt: string;
      timezone: Timezone;
      costCalculationMethod: CostCalculationMethod;
      executionTime: string;
      status: FulfillmentAgencyStatus;
      phone: string;
      email: string;
      name: string;
      id: number;
      noProduct: number;
      noStore: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency',
      query: {
        'userId': userId,
        'search': search,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getFulfillmentAgency({
    id,
  }: {
    id: number,
  }): CancelablePromise<(FulfillmentAgency & {
    Wallet: Array<Wallet>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/{id}',
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
   * @returns FulfillmentAgency Ok
   * @throws ApiError
   */
  public updateFulfillmentAgency({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateFulfillmentAgencyDto,
  }): CancelablePromise<FulfillmentAgency> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/fulfillment-agency/{id}',
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
   * @returns FulfillmentAgency Ok
   * @throws ApiError
   */
  public deleteFulfillmentAgency({
    id,
  }: {
    id: number,
  }): CancelablePromise<FulfillmentAgency> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/fulfillment-agency/{id}',
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
   * @returns FulfillmentAgency Ok
   * @throws ApiError
   */
  public updateFulfillmentAgencyStatus({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateFulfillmentAgencyStatusDto,
  }): CancelablePromise<FulfillmentAgency> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/fulfillment-agency/{id}/status',
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

}
