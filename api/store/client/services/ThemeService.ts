/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemeService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

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

}
