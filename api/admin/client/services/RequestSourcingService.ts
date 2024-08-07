/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApproveRequestSourcingDto } from '../models/ApproveRequestSourcingDto';
import type { RejectRequestSourcingDto } from '../models/RejectRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { RequestSourcingStatus } from '../models/RequestSourcingStatus';
import type { Store } from '../models/Store';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RequestSourcingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllRequestSourcing({
    storeId,
    fulfillmentAgencyId,
    statusRequest,
    search,
    startDate,
    endDate,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId?: string,
    fulfillmentAgencyId?: number,
    statusRequest?: Array<RequestSourcingStatus>,
    search?: string,
    startDate?: string,
    endDate?: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<(RequestSourcing & {
      Store: Store;
    })>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-sourcing',
      query: {
        'storeId': storeId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
        'statusRequest': statusRequest,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getRequestSourcing({
    id,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<(RequestSourcing & {
    Store: Store;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-sourcing/{id}',
      path: {
        'id': id,
      },
      query: {
        'storeId': storeId,
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
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public approveRequestSourcing({
    id,
    requestBody,
    fulfillmentAgencyId,
    storeId,
  }: {
    id: number,
    requestBody: ApproveRequestSourcingDto,
    fulfillmentAgencyId?: number,
    storeId?: string,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-sourcing/{id}/approve',
      path: {
        'id': id,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public rejectRequestSourcing({
    id,
    requestBody,
    storeId,
    fulfillmentAgencyId,
  }: {
    id: number,
    requestBody: RejectRequestSourcingDto,
    storeId?: string,
    fulfillmentAgencyId?: number,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-sourcing/{id}/reject',
      path: {
        'id': id,
      },
      query: {
        'storeId': storeId,
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
