/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Colors } from './Colors';
import type { LogoSize } from './LogoSize';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type CreateThemeDto = {
  name: NameDto;
  logo: PhotoDto;
  logoSize: LogoSize;
  heroBanner: PhotoDto;
  font: string;
  colors: Colors;
  themeTemplateId: number;
};

