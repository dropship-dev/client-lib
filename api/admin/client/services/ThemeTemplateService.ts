/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateThemeTemplateDto } from '../models/CreateThemeTemplateDto';
import type { ThemeTemplate } from '../models/ThemeTemplate';
import type { UpdateThemeTemplateDto } from '../models/UpdateThemeTemplateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ThemeTemplateService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns ThemeTemplate Ok
   * @throws ApiError
   */
  public createThemeTemplate({
    requestBody,
  }: {
    requestBody: CreateThemeTemplateDto,
  }): CancelablePromise<ThemeTemplate> {
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
   * @returns ThemeTemplate Ok
   * @throws ApiError
   */
  public getAllThemeTemplate(): CancelablePromise<Array<ThemeTemplate>> {
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
   * @returns ThemeTemplate Ok
   * @throws ApiError
   */
  public getThemeTemplate({
    id,
  }: {
    id: number,
  }): CancelablePromise<ThemeTemplate> {
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
   * @returns ThemeTemplate Ok
   * @throws ApiError
   */
  public updateThemeTemplate({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateThemeTemplateDto,
  }): CancelablePromise<ThemeTemplate> {
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
   * @returns ThemeTemplate Ok
   * @throws ApiError
   */
  public deleteThemeTemplate({
    id,
  }: {
    id: number,
  }): CancelablePromise<ThemeTemplate> {
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
