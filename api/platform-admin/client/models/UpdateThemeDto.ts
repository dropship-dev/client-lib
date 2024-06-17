/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogoSize } from './LogoSize';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_Colors } from './PrismaJson_Colors';
import type { PrismaJson_ThemeNotes } from './PrismaJson_ThemeNotes';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';

export type UpdateThemeDto = {
  commonNotes?: PrismaJson_ThemeNotes;
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
  logoSize?: LogoSize;
  /**
   * @deprecated
   */
  logo?: PhotoDto;
  name?: NameDto;
};

