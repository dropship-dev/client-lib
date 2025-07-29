/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_ThemePageType } from './_36_Enums_ThemePageType';
export type ThemePageWithDetails = {
  parentThemePageId: number;
  themeId: number;
  themeLibraryId: number;
  content: string;
  type: _36_Enums_ThemePageType;
  name: string;
  updatedAt: string;
  createdAt: string;
  id: number;
  ThemePagesOnProducts: Array<{
    productId: number;
  }>;
};

