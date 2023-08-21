/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { RequestSourcing } from '../models/RequestSourcing';
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
      url: '/store/{storeId}/request-sourcing',
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
  public getAllRequestSourcing({
    storeId,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<RequestSourcing>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/request-sourcing',
      path: {
        'storeId': storeId,
      },
      query: {
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
      url: '/store/{storeId}/request-sourcing/{id}',
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
      url: '/store/{storeId}/request-sourcing/{id}',
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
      url: '/store/{storeId}/request-sourcing/{id}',
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

}
