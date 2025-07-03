/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ThemeLibraryService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    data: Array<{
      nodes: PrismaJson_ThemeNodes;
      style: PrismaJson_ThemeStyle;
      image: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
      setting: PrismaJson_ThemeSetting;
    }>;
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
  }): CancelablePromise<({
    ThemePage: Array<{
      parentThemePageId: number;
      themeId: number;
      themeLibraryId: number;
      content: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    }>;
  } & {
    nodes: PrismaJson_ThemeNodes;
    style: PrismaJson_ThemeStyle;
    image: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
    setting: PrismaJson_ThemeSetting;
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
}
