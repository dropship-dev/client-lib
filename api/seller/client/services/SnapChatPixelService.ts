/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSnapChatPixelDto } from '../models/CreateSnapChatPixelDto';
import type { SnapChatPixel } from '../models/SnapChatPixel';
import type { UpdateSnapChatPixelDto } from '../models/UpdateSnapChatPixelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SnapChatPixelService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createSnapChatPixel({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateSnapChatPixelDto,
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
      url: '/store/{storeId}/snapchat-pixel',
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
  public getAllSnapChatPixel({
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
      url: '/store/{storeId}/snapchat-pixel',
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
  public getSnapChatPixel({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<(SnapChatPixel & {
    Product: Array<{
      id: number;
    }>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/snapchat-pixel/{pixelId}',
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
  public updateSnapChatPixel({
    storeId,
    pixelId,
    requestBody,
  }: {
    storeId: string,
    pixelId: string,
    requestBody: UpdateSnapChatPixelDto,
  }): CancelablePromise<{
    pixelId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/snapchat-pixel/{pixelId}',
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
  public deleteSnapChatPixel({
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
      url: '/store/{storeId}/snapchat-pixel/{pixelId}',
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
