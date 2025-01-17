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
export type UpdateThemeDto = {
  commonNodes?: PrismaJson_ThemeNodes;
  ThemePage?: Array<{
    content: string;
    id: number;
  }>;
  setting?: PrismaJson_ThemeSetting;
  style?: PrismaJson_ThemeStyle;
  /**
   * @deprecated
   */
  components?: string;
  /**
   * @deprecated
   */
  colors?: PrismaJson_Colors;
  /**
   * @deprecated
   */
  font?: string;
  /**
   * @deprecated
   */
  heroBanner?: PhotoDto;
  /**
   * @deprecated
   */
  logoSize?: _36_Enums_LogoSize;
  /**
   * @deprecated
   */
  logo?: PhotoDto;
  name?: NameDto;
};

