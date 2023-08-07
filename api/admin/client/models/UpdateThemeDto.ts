/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Colors } from './Colors';
import type { LogoSize } from './LogoSize';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type UpdateThemeDto = {
  colors?: Colors;
  font?: string;
  heroBanner?: PhotoDto;
  logoSize?: LogoSize;
  logo?: PhotoDto;
  name?: NameDto;
};

