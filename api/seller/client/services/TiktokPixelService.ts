/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTiktokPixelDto } from '../models/CreateTiktokPixelDto';
import type { UpdateTiktokPixelDto } from '../models/UpdateTiktokPixelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TiktokPixelService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createTiktokPixel({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateTiktokPixelDto,
  }): CancelablePromise<({
    Product: Array<{
      id: number;
    }>;
  } & {
    pixelId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/tiktok-pixel',
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
  public getAllTiktokPixel({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<({
    Product: Array<{
      id: number;
    }>;
  } & {
    pixelId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/tiktok-pixel',
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
  public getTiktokPixel({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<({
    Product: Array<{
      id: number;
    }>;
  } & {
    pixelId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/tiktok-pixel/{pixelId}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public updateTiktokPixel({
    storeId,
    pixelId,
    requestBody,
  }: {
    storeId: string,
    pixelId: string,
    requestBody: UpdateTiktokPixelDto,
  }): CancelablePromise<{
    pixelId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/tiktok-pixel/{pixelId}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteTiktokPixel({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<{
    pixelId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/tiktok-pixel/{pixelId}',
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
