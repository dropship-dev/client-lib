/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogoSize } from './LogoSize';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_Colors } from './PrismaJson_Colors';

export type UpdateThemeDto = {
  colors?: PrismaJson_Colors;
  font?: string;
  heroBanner?: PhotoDto;
  logoSize?: LogoSize;
  logo?: PhotoDto;
  name?: NameDto;
};

