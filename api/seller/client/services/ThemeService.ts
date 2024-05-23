/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeActiveTheme } from '../models/ChangeActiveTheme';
import type { CreateThemeDto } from '../models/CreateThemeDto';
import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';
import type { UpdateThemeDto } from '../models/UpdateThemeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns Theme Ok
   * @throws ApiError
   */
  public createTheme({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateThemeDto,
  }): CancelablePromise<Theme> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/theme',
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
  public getAllTheme({
    storeId,
    pageSize = 20,
    nextPageIndex,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<Theme>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme',
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
  public getActiveTheme({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<(Theme & {
    ThemePage: Array<ThemePage>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/active',
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
   * @returns string Ok
   * @throws ApiError
   */
  public changeActiveTheme({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: ChangeActiveTheme,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/theme/active',
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
  public getActiveThemePage({
    storeId,
    pageName,
  }: {
    storeId: string,
    pageName: string,
  }): CancelablePromise<(Theme & {
    ThemePage: Array<ThemePage>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/active/page/{pageName}',
      path: {
        'storeId': storeId,
        'pageName': pageName,
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
  public getTheme({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<(Theme & {
    ThemePage: Array<ThemePage>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/{id}',
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
   * @returns Theme Ok
   * @throws ApiError
   */
  public updateTheme({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: UpdateThemeDto,
  }): CancelablePromise<Theme> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/theme/{id}',
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
   * @returns Theme Ok
   * @throws ApiError
   */
  public deleteTheme({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<Theme> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/theme/{id}',
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
