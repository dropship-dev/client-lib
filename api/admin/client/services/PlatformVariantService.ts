/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchPayload } from '../models/BatchPayload';
import type { CreatePlatformVariantsDto } from '../models/CreatePlatformVariantsDto';
import type { PlatformVariant } from '../models/PlatformVariant';
import type { UpdatePlatformVariantDto } from '../models/UpdatePlatformVariantDto';
import type { UpdatePlatformVariantsDto } from '../models/UpdatePlatformVariantsDto';
import type { UpdatePlatformVariantStatusDto } from '../models/UpdatePlatformVariantStatusDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlatformVariantService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns BatchPayload Ok
   * @throws ApiError
   */
  public createPlatformVariants({
    platformProductId,
    requestBody,
  }: {
    platformProductId: number,
    requestBody: CreatePlatformVariantsDto,
  }): CancelablePromise<BatchPayload> {
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
   * @returns string Ok
   * @throws ApiError
   */
  public updatePlatformVariants({
    platformProductId,
    requestBody,
  }: {
    platformProductId: number,
    requestBody: UpdatePlatformVariantsDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'PATCH',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deletePlatformVariants({
    platformProductId,
    ids,
  }: {
    platformProductId: number,
    ids: Array<number>,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform-product/{platformProductId}/variant',
      path: {
        'platformProductId': platformProductId,
      },
      query: {
        'ids': ids,
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
   * @returns PlatformVariant Ok
   * @throws ApiError
   */
  public getPlatformVariant({
    platformProductId,
    id,
  }: {
    platformProductId: number,
    id: number,
  }): CancelablePromise<PlatformVariant> {
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
   * @returns PlatformVariant Ok
   * @throws ApiError
   */
  public updatePlatformVariant({
    platformProductId,
    id,
    requestBody,
  }: {
    platformProductId: number,
    id: number,
    requestBody: UpdatePlatformVariantDto,
  }): CancelablePromise<PlatformVariant> {
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
   * @returns PlatformVariant Ok
   * @throws ApiError
   */
  public deletePlatformVariant({
    platformProductId,
    id,
  }: {
    platformProductId: number,
    id: number,
  }): CancelablePromise<PlatformVariant> {
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
   * @returns PlatformVariant Ok
   * @throws ApiError
   */
  public updatePlatformVariantStatus({
    platformProductId,
    id,
    requestBody,
  }: {
    platformProductId: number,
    id: number,
    requestBody: UpdatePlatformVariantStatusDto,
  }): CancelablePromise<PlatformVariant> {
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
