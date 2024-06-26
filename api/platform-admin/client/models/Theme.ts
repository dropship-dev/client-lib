/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogoSize } from './LogoSize';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_Colors } from './PrismaJson_Colors';
import type { PrismaJson_ThemeNodes } from './PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';

/**
 * Model Theme
 */
export type Theme = {
  updatedAt: string;
  createdAt: string;
  /**
   * @deprecated
   */
  themeTemplateId: number | null;
  storeId: string;
  /**
   * [ThemeNodes]
   */
  nodes: PrismaJson_ThemeNodes | null;
  /**
   * [ThemeSetting]
   */
  setting: PrismaJson_ThemeSetting | null;
  /**
   * [ThemeStyle]
   */
  style: PrismaJson_ThemeStyle | null;
  isActivated: boolean | null;
  /**
   * @deprecated
   */
  components: Prisma_JsonValue | null;
  /**
   * @deprecated
   */
  colors: PrismaJson_Colors | null;
  /**
   * @deprecated
   */
  font: string | null;
  /**
   * @deprecated
   */
  heroBanner: string | null;
  /**
   * @deprecated
   */
  logoSize: LogoSize | null;
  /**
   * @deprecated
   */
  logo: string;
  name: string;
  id: number;
};

