/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkCreatePingpongAccountDto } from '../models/BulkCreatePingpongAccountDto';
import type { BulkDeletePingpongAccountDto } from '../models/BulkDeletePingpongAccountDto';
import type { BulkUpDatePingpongAccountDto } from '../models/BulkUpDatePingpongAccountDto';
import type { ResponseStoreAddPingpong } from '../models/ResponseStoreAddPingpong';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PingPongAccountV2Service {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public bulkCreatePingPongAccount({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: BulkCreatePingpongAccountDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/pingpong-account',
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
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public bulkUpdatePingPongAccount({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: BulkUpDatePingpongAccountDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/pingpong-account',
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
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public bulkDeletePingPongAccount({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: BulkDeletePingpongAccountDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v2/pingpong-account',
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
  /**
   * @returns string Ok
   * @throws ApiError
   */
  public getAllAccountPingpong({
    fulfillmentAgencyId,
  }: {
    fulfillmentAgencyId: number,
  }): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/pingpong-account',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns ResponseStoreAddPingpong Ok
   * @throws ApiError
   */
  public getStoreAddPingpongAccount({
    fulfillmentAgencyId,
    emailPingpong,
  }: {
    fulfillmentAgencyId: number,
    emailPingpong?: string,
  }): CancelablePromise<ResponseStoreAddPingpong> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/pingpong-account/store',
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'emailPingpong': emailPingpong,
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
