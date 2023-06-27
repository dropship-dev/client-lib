/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVariantDto } from '../models/CreateVariantDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateVariantDto } from '../models/UpdateVariantDto';
import type { UpdateVariantStatusDto } from '../models/UpdateVariantStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlatformVariantService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createPlatformVariant({
    platformProductId,
    requestBody,
  }: {
    platformProductId: number,
    requestBody: CreateVariantDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform-product/{platformProductId}/variant',
      path: {
        'platformProductId': platformProductId,
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
  public getPlatformVariant({
    platformProductId,
    id,
  }: {
    platformProductId: number,
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform-product/{platformProductId}/variant/{id}',
      path: {
        'platformProductId': platformProductId,
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
  public updatePlatformVariant({
    platformProductId,
    id,
    requestBody,
  }: {
    platformProductId: number,
    id: number,
    requestBody: UpdateVariantDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/variant/{id}',
      path: {
        'platformProductId': platformProductId,
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
  public deletePlatformVariant({
    platformProductId,
    id,
  }: {
    platformProductId: number,
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/variant/{id}',
      path: {
        'platformProductId': platformProductId,
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
  public updatePlatformVariantStatus({
    platformProductId,
    id,
    requestBody,
  }: {
    platformProductId: number,
    id: number,
    requestBody: UpdateVariantStatusDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform-product/{platformProductId}/variant/{id}/status',
      path: {
        'platformProductId': platformProductId,
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
