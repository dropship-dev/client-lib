/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { _36_Enums_ThemePageType } from '../models/_36_Enums_ThemePageType';
import type { ChangeActiveTheme } from '../models/ChangeActiveTheme';
import type { CloneThemePageDto } from '../models/CloneThemePageDto';
import type { CreateThemeDto } from '../models/CreateThemeDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
import type { Theme } from '../models/Theme';
import type { ThemePageWithDetails } from '../models/ThemePageWithDetails';
import type { ThemeWithDetails } from '../models/ThemeWithDetails';
import type { UpdateAssignedProductsForThemePageDto } from '../models/UpdateAssignedProductsForThemePageDto';
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
    data: Array<{
      themeTemplateId: number;
      isActivated: boolean;
      components: any;
      colors: any;
      font: string;
      heroBanner: string;
      logoSize: _36_Enums_LogoSize;
      logo: string;
      nodes: PrismaJson_ThemeNodes;
      style: PrismaJson_ThemeStyle;
      name: string;
      updatedAt: string;
      createdAt: string;
      storeId: string;
      id: number;
      setting: PrismaJson_ThemeSetting;
    }>;
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
  }): CancelablePromise<({
    ThemePage: Array<{
      parentThemePageId: number;
      themeId: number;
      themeLibraryId: number;
      content: string;
      type: _36_Enums_ThemePageType;
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
    style: PrismaJson_ThemeStyle;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    setting: PrismaJson_ThemeSetting;
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
    style: PrismaJson_ThemeStyle;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    setting: PrismaJson_ThemeSetting;
  } & {
    ThemePage: {
      parentThemePageId: number;
      themeId: number;
      themeLibraryId: number;
      content: string;
      type: _36_Enums_ThemePageType;
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
  public cloneThemePage({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CloneThemePageDto,
  }): CancelablePromise<{
    parentThemePageId: number;
    themeId: number;
    themeLibraryId: number;
    content: string;
    type: _36_Enums_ThemePageType;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/theme/clone-theme-page',
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
  public listActiveThemePages({
    storeId,
    pageType,
  }: {
    storeId: string,
    pageType: _36_Enums_ThemePageType,
  }): CancelablePromise<{
    themePages: Array<{
      name: string;
      id: number;
    }>;
    activeTheme: {
      name: string;
      id: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/theme-pages/active',
      path: {
        'storeId': storeId,
      },
      query: {
        'pageType': pageType,
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
  public listProductsForThemePage({
    storeId,
    pageSize = 20,
    nextPageIndex,
    name,
    themePageId,
  }: {
    storeId: string,
    pageSize?: number,
    nextPageIndex?: number,
    name?: string,
    themePageId?: number,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      permalink: string;
      photos: PrismaJson_Photos;
      name: string;
      id: number;
      ThemePage: Array<{
        id: number;
      }>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/theme-page/products',
      path: {
        'storeId': storeId,
      },
      query: {
        'pageSize': pageSize,
        'nextPageIndex': nextPageIndex,
        'name': name,
        'themePageId': themePageId,
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
   * @returns ThemePageWithDetails Ok
   * @throws ApiError
   */
  public getThemePage({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<ThemePageWithDetails> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/theme/theme-page/{id}',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteThemePage({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/theme/theme-page/{id}',
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
   * @returns void
   * @throws ApiError
   */
  public updateAssignedProductsForThemePage({
    storeId,
    id,
    requestBody,
  }: {
    storeId: string,
    id: number,
    requestBody: UpdateAssignedProductsForThemePageDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/theme/theme-page/{id}/update-assigned-products',
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
   * @returns ThemeWithDetails Ok
   * @throws ApiError
   */
  public getTheme({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<ThemeWithDetails> {
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
   * @returns any Ok
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
  }): CancelablePromise<{
    themeTemplateId: number;
    isActivated: boolean;
    components: any;
    colors: any;
    font: string;
    heroBanner: string;
    logoSize: _36_Enums_LogoSize;
    logo: string;
    nodes: PrismaJson_ThemeNodes;
    style: PrismaJson_ThemeStyle;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    setting: PrismaJson_ThemeSetting;
  }> {
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
   * @returns any Ok
   * @throws ApiError
   */
  public deleteTheme({
    storeId,
    id,
  }: {
    storeId: string,
    id: number,
  }): CancelablePromise<{
    themeTemplateId: number;
    isActivated: boolean;
    components: any;
    colors: any;
    font: string;
    heroBanner: string;
    logoSize: _36_Enums_LogoSize;
    logo: string;
    nodes: PrismaJson_ThemeNodes;
    style: PrismaJson_ThemeStyle;
    name: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
    setting: PrismaJson_ThemeSetting;
  }> {
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
