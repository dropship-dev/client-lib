/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Colors } from './Colors';
import type { Typos } from './Typos';

export type CreateThemeDto = {
  name: string;
  icon: string;
  logo: string;
  coverImage: string;
  typos: Typos;
  colors: Colors;
  themeTemplateId: number;
};

