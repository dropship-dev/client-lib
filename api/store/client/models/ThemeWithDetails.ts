/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_LogoSize } from './_36_Enums_LogoSize';
import type { _36_Enums_ThemePageType } from './_36_Enums_ThemePageType';
import type { PrismaJson_ThemeNodes } from './PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
import type { ThemePageWithDetails } from './ThemePageWithDetails';
export type ThemeWithDetails = {
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
  ThemePage: Array<ThemePageWithDetails>;
  ProductThemes: Array<{
    assignedProducts: number;
    type: _36_Enums_ThemePageType | null;
    name: string;
    id: number;
  }>;
};

