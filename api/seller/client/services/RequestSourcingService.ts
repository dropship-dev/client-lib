/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
import type { RequestSourcingStatus } from '../models/RequestSourcingStatus';
import type { Store } from '../models/Store';
import type { UpdateRequestSourcingDto } from '../models/UpdateRequestSourcingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RequestSourcingService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public createRequestSourcing({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateRequestSourcingDto,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/request-sourcing',
      query: {
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
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public getRequestSourcing({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/request-sourcing/{id}',
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
   * @returns RequestSourcing Ok
   * @throws ApiError
   */
  public updateRequestSourcing({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: UpdateRequestSourcingDto,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/request-sourcing/{id}',
      path: {
        'id': id,
      },
      query: {
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
  public deleteRequestSourcing({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<RequestSourcing> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/request-sourcing/{id}',
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

}
