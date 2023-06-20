/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Colors } from './Colors';
import type { Omit_Theme_id_or_createdAt_or_updatedAt_or_storeId_or_colors_or_typos_ } from './Omit_Theme_id_or_createdAt_or_updatedAt_or_storeId_or_colors_or_typos_';
import type { Typos } from './Typos';

export type UpdateThemeDto = (Omit_Theme_id_or_createdAt_or_updatedAt_or_storeId_or_colors_or_typos_ & {
  colors: Colors;
  typos: Typos;
});

