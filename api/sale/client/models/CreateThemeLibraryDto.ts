/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_ThemeNodes } from './PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
export type CreateThemeLibraryDto = {
  name: NameDto;
  image: PhotoDto;
  style: PrismaJson_ThemeStyle;
  setting: PrismaJson_ThemeSetting;
  nodes?: PrismaJson_ThemeNodes;
};

