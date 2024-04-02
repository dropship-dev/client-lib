/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateThemeLibraryDto } from '../models/CreateThemeLibraryDto';
import type { ThemeLibrary } from '../models/ThemeLibrary';
import type { ThemePage } from '../models/ThemePage';
import type { UpdateThemeLibraryDto } from '../models/UpdateThemeLibraryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ThemeLibraryService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns ThemeLibrary Ok
   * @throws ApiError
   */
  public createThemeLibrary({
    requestBody,
  }: {
    requestBody: CreateThemeLibraryDto,
  }): CancelablePromise<ThemeLibrary> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/theme-library',
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
  public getAllThemeLibrary({
    pageSize = 20,
    nextPageIndex,
  }: {
    pageSize?: number,
    nextPageIndex?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<ThemeLibrary>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/theme-library',
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
  public getThemeLibrary({
    id,
  }: {
    id: number,
  }): CancelablePromise<(ThemeLibrary & {
    ThemePage: Array<ThemePage>;
  })> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/theme-library/{id}',
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
   * @returns ThemeLibrary Ok
   * @throws ApiError
   */
  public updateThemeLibrary({
    id,
    requestBody,
  }: {
    id: number,
    requestBody: UpdateThemeLibraryDto,
  }): CancelablePromise<ThemeLibrary> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/theme-library/{id}',
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
   * @returns ThemeLibrary Ok
   * @throws ApiError
   */
  public deleteThemeLibrary({
    id,
  }: {
    id: number,
  }): CancelablePromise<ThemeLibrary> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/theme-library/{id}',
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
