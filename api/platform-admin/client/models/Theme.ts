/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogoSize } from './LogoSize';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_Colors } from './PrismaJson_Colors';
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
   * [ThemeStyle]
   */
  style: PrismaJson_ThemeStyle;
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

