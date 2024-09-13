/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGADto } from '../models/CreateGADto';
import type { GoogleAnalytic } from '../models/GoogleAnalytic';
import type { UpdateGADto } from '../models/UpdateGADto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GoogleAnalyticService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createGa({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateGADto,
  }): CancelablePromise<(GoogleAnalytic & {
    Product: Array<{
      id: number;
    }>;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/ga',
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
  public getAllGa({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<(GoogleAnalytic & {
    Product: Array<{
      id: number;
    }>;
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/ga',
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
  public getGa({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<(GoogleAnalytic & {
    Product: Array<{
      id: number;
    }>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/ga/{pixelId}',
      path: {
        'storeId': storeId,
        'pixelId': pixelId,
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
   * @returns GoogleAnalytic Ok
   * @throws ApiError
   */
  public updateGa({
    storeId,
    pixelId,
    requestBody,
  }: {
    storeId: string,
    pixelId: string,
    requestBody: UpdateGADto,
  }): CancelablePromise<GoogleAnalytic> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/ga/{pixelId}',
      path: {
        'storeId': storeId,
        'pixelId': pixelId,
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
   * @returns GoogleAnalytic Ok
   * @throws ApiError
   */
  public deleteGa({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<GoogleAnalytic> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/ga/{pixelId}',
      path: {
        'storeId': storeId,
        'pixelId': pixelId,
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
