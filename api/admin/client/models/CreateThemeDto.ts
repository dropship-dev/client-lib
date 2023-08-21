/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogoSize } from './LogoSize';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_Colors } from './PrismaJson_Colors';

export type CreateThemeDto = {
  name: NameDto;
  logo: PhotoDto;
  logoSize: LogoSize;
  heroBanner: PhotoDto;
  font: string;
  colors: PrismaJson_Colors;
  themeTemplateId: number;
};

