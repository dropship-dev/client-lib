/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogoSize } from './LogoSize';
import type { PrismaJson_Colors } from './PrismaJson_Colors';

/**
 * Model Theme
 */
export type Theme = {
  updatedAt: string;
  createdAt: string;
  themeTemplateId: number;
  storeId: string;
  isActivated: boolean | null;
  /**
   * [Colors]
   */
  colors: PrismaJson_Colors;
  font: string;
  heroBanner: string;
  logoSize: LogoSize;
  logo: string;
  name: string;
  id: number;
};

