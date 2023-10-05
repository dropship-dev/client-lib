/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFulfillmentAgencyDto } from '../models/CreateFulfillmentAgencyDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';

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
   * @returns FulfillmentAgency Ok
   * @throws ApiError
   */
  public getAllFulfillmentAgency({
    userId,
  }: {
    userId?: string,
  }): CancelablePromise<Array<FulfillmentAgency>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency',
      query: {
        'userId': userId,
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
  public getAgencyByEmail({
    email,
  }: {
    email: string,
  }): CancelablePromise<{
    avatar: string;
    email: string;
    name: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/fulfillment-agency/get-agency-by-email',
      query: {
        'email': email,
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
