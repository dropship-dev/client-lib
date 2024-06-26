/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_ThemeNodes } from './PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';

/**
 * Model ThemeLibrary
 */
export type ThemeLibrary = {
  updatedAt: string;
  createdAt: string;
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
  image: string | null;
  name: string;
  id: number;
};

