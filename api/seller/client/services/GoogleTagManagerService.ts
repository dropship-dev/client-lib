/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGTMDto } from '../models/CreateGTMDto';
import type { GoogleTagManager } from '../models/GoogleTagManager';
import type { UpdateGTMDto } from '../models/UpdateGTMDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GoogleTagManagerService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createGoogleTagManager({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateGTMDto,
  }): CancelablePromise<(GoogleTagManager & {
    Product: Array<{
      id: number;
    }>;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/google-tag-manager',
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
  public getAllGoogleTagManager({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<(GoogleTagManager & {
    Product: Array<{
      id: number;
    }>;
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/google-tag-manager',
      path: {
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
   * @returns any Ok
   * @throws ApiError
   */
  public getGoogleTagManager({
    storeId,
    tag,
  }: {
    storeId: string,
    tag: string,
  }): CancelablePromise<(GoogleTagManager & {
    Product: Array<{
      id: number;
    }>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/google-tag-manager/{tag}',
      path: {
        'storeId': storeId,
        'tag': tag,
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
   * @returns GoogleTagManager Ok
   * @throws ApiError
   */
  public updateGoogleTagManager({
    storeId,
    tag,
    requestBody,
  }: {
    storeId: string,
    tag: string,
    requestBody: UpdateGTMDto,
  }): CancelablePromise<GoogleTagManager> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/google-tag-manager/{tag}',
      path: {
        'storeId': storeId,
        'tag': tag,
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
   * @returns GoogleTagManager Ok
   * @throws ApiError
   */
  public deleteGoogleTagManager({
    storeId,
    tag,
  }: {
    storeId: string,
    tag: string,
  }): CancelablePromise<GoogleTagManager> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/google-tag-manager/{tag}',
      path: {
        'storeId': storeId,
        'tag': tag,
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
