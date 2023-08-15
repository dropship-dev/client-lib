/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTag } from '../models/AdminTag';
import type { CreateTagDto } from '../models/CreateTagDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TagService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns AdminTag Ok
   * @throws ApiError
   */
  public createTag({
    requestBody,
  }: {
    requestBody: CreateTagDto,
  }): CancelablePromise<AdminTag> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tag',
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
   * @returns AdminTag Ok
   * @throws ApiError
   */
  public getTags({
    search,
    limit = 10,
  }: {
    search?: string,
    limit?: number,
  }): CancelablePromise<Array<AdminTag>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tag',
      query: {
        'search': search,
        'limit': limit,
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
   * @returns AdminTag Ok
   * @throws ApiError
   */
  public getTag({
    id,
  }: {
    id: string,
  }): CancelablePromise<AdminTag> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tag/{id}',
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
