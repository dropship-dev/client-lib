/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { COST_CALCULATION_METHOD } from '../models/COST_CALCULATION_METHOD';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentAgencyStatus } from '../models/FulfillmentAgencyStatus';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FulfillmentAgencyService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllFulfillmentAgency({
    userId,
    pageSize = 20,
    nextPageIndex,
  }: {
    userId?: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      updatedAt: string;
      createdAt: string;
      costCalculationMethod: COST_CALCULATION_METHOD;
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
   * @returns FulfillmentAgency Ok
   * @throws ApiError
   */
  public getFulfillmentAgency({
    id,
  }: {
    id: number,
  }): CancelablePromise<FulfillmentAgency> {
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

}
