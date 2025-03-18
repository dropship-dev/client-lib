/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_LogoSize } from './_36_Enums_LogoSize';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_Colors } from './PrismaJson_Colors';
import type { PrismaJson_ThemeNodes } from './PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
export type CreateThemeDto = {
  name: NameDto;
  /**
   * @deprecated
   */
  logo: PhotoDto;
  /**
   * @deprecated
   */
  logoSize?: _36_Enums_LogoSize;
  /**
   * @deprecated
   */
  heroBanner?: PhotoDto;
  /**
   * @deprecated
   */
  font?: string;
  /**
   * @deprecated
   */
  colors?: PrismaJson_Colors;
  /**
   * @deprecated
   */
  components?: string;
  /**
   * @deprecated
   */
  themeTemplateId?: number;
  style?: PrismaJson_ThemeStyle;
  setting?: PrismaJson_ThemeSetting;
  nodes?: PrismaJson_ThemeNodes;
  ThemePage?: Array<{
    content: string;
    name: NameDto;
  }>;
};

