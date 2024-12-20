/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
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
  }): CancelablePromise<({
    ThemePage: Array<{
      themeId: number;
      themeLibraryId: number;
      content: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    }>;
  } & {
    themeTemplateId: number;
    isActivated: boolean;
    components: any;
    colors: any;
    font: string;
    heroBanner: string;
    logoSize: _36_Enums_LogoSize;
    logo: string;
    nodes: PrismaJson_ThemeNodes;
    setting: PrismaJson_ThemeSetting;
    style: PrismaJson_ThemeStyle;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
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
  }): CancelablePromise<({
    themeTemplateId: number;
    isActivated: boolean;
    components: any;
    colors: any;
    font: string;
    heroBanner: string;
    logoSize: _36_Enums_LogoSize;
    logo: string;
    nodes: PrismaJson_ThemeNodes;
    setting: PrismaJson_ThemeSetting;
    style: PrismaJson_ThemeStyle;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  } & {
    ThemePage: {
      themeId: number;
      themeLibraryId: number;
      content: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: number;
    };
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
  }) | null> {
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
