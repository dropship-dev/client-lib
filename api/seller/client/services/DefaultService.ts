/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestSourcingDto } from '../models/CreateRequestSourcingDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { Photos } from '../models/Photos';
import type { UpdateRequestSourcingDto } from '../models/UpdateRequestSourcingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createRequestSourcing({
    storeId,
    requestBody,
  }: {
    storeId: number,
    requestBody: CreateRequestSourcingDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
    storeId: number,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: (string | number | Photos);
    total: number;
    data: Array<GetResult_any_any_any_>;
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
   * @returns any Ok
   * @throws ApiError
   */
  public getRequestSourcing({
    storeId,
    id,
  }: {
    storeId: number,
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateRequestSourcing({
    storeId,
    id,
    requestBody,
  }: {
    storeId: number,
    id: number,
    requestBody: UpdateRequestSourcingDto,
  }): CancelablePromise<GetResult_any_any_any_> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteRequestSourcing({
    storeId,
    id,
  }: {
    storeId: number,
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
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
