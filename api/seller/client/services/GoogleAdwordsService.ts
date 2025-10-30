/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_GoogleAdWordsTrackingEventType } from '../models/_36_Enums_GoogleAdWordsTrackingEventType';
import type { CreateGoogleAdWordsDto } from '../models/CreateGoogleAdWordsDto';
import type { CreateGoogleAdWordsResponse } from '../models/CreateGoogleAdWordsResponse';
import type { GetGoogleAdWordsResponse } from '../models/GetGoogleAdWordsResponse';
import type { UpdateGoogleAdWordsDto } from '../models/UpdateGoogleAdWordsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GoogleAdwordsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns CreateGoogleAdWordsResponse Ok
   * @throws ApiError
   */
  public createGoogleAdWords({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateGoogleAdWordsDto,
  }): CancelablePromise<CreateGoogleAdWordsResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/google-adwords',
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
   * @returns GetGoogleAdWordsResponse Ok
   * @throws ApiError
   */
  public listGoogleAdWords({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<GetGoogleAdWordsResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/google-adwords',
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
   * @returns GetGoogleAdWordsResponse Ok
   * @throws ApiError
   */
  public getGoogleAdWords({
    storeId,
    adwordsId,
  }: {
    storeId: string,
    adwordsId: number,
  }): CancelablePromise<GetGoogleAdWordsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/google-adwords/{adwordsId}',
      path: {
        'storeId': storeId,
        'adwordsId': adwordsId,
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
  public updateGoogleAdWords({
    storeId,
    adwordsId,
    requestBody,
  }: {
    storeId: string,
    adwordsId: number,
    requestBody: UpdateGoogleAdWordsDto,
  }): CancelablePromise<{
    eventType: _36_Enums_GoogleAdWordsTrackingEventType;
    conversionLabel: string;
    conversionId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/google-adwords/{adwordsId}',
      path: {
        'storeId': storeId,
        'adwordsId': adwordsId,
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
  public deleteGoogleAdWords({
    storeId,
    adwordsId,
  }: {
    storeId: string,
    adwordsId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/google-adwords/{adwordsId}',
      path: {
        'storeId': storeId,
        'adwordsId': adwordsId,
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
