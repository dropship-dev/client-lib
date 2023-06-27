/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateThemeTemplateDto } from '../models/CreateThemeTemplateDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateThemeTemplateDto } from '../models/UpdateThemeTemplateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemeTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createThemeTemplate({
    requestBody,
  }: {
    requestBody: CreateThemeTemplateDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/theme-template',
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
  public getAllThemeTemplate(): CancelablePromise<Array<GetResult_any_any_any_>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/theme-template',
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
  public getThemeTemplate({
    id,
  }: {
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/theme-template/{id}',
      path: {
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
  public updateThemeTemplate({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateThemeTemplateDto,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/theme-template/{id}',
      path: {
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
  public deleteThemeTemplate({
    id,
  }: {
    id: number,
  }): CancelablePromise<GetResult_any_any_any_> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/theme-template/{id}',
      path: {
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
