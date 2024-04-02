/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFbPixelDto } from '../models/CreateFbPixelDto';
import type { FbPixel } from '../models/FbPixel';
import type { Product } from '../models/Product';
import type { UpdateFbPixelDto } from '../models/UpdateFbPixelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FbPixelService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createFbPixel({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateFbPixelDto,
  }): CancelablePromise<(FbPixel & {
    Product: Array<Product>;
  })> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/fb-pixel',
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
  public getAllFbPixel({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<(FbPixel & {
    Product: Array<Product>;
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/fb-pixel',
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
  public getFbPixel({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<(FbPixel & {
    Product: Array<Product>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/fb-pixel/{pixelId}',
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
   * @returns FbPixel Ok
   * @throws ApiError
   */
  public updateFbPixel({
    storeId,
    pixelId,
    requestBody,
  }: {
    storeId: string,
    pixelId: string,
    requestBody: UpdateFbPixelDto,
  }): CancelablePromise<FbPixel> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/fb-pixel/{pixelId}',
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
   * @returns FbPixel Ok
   * @throws ApiError
   */
  public deleteFbPixel({
    storeId,
    pixelId,
  }: {
    storeId: string,
    pixelId: string,
  }): CancelablePromise<FbPixel> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/fb-pixel/{pixelId}',
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
