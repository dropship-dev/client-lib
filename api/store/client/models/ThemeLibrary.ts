/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';

/**
 * Model ThemeLibrary
 */
export type ThemeLibrary = {
  updatedAt: string;
  createdAt: string;
  /**
   * [ThemeSetting]
   */
  setting: PrismaJson_ThemeSetting;
  /**
   * [ThemeStyle]
   */
  style: PrismaJson_ThemeStyle;
  image: string | null;
  name: string;
  id: number;
};
