/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossSell } from './CrossSell';
import type { VariantCombo } from './VariantCombo';

export type getStatusCombosType = (VariantCombo & {
  Product: {
    isActive: boolean;
    deleted: boolean;
    isEnable: boolean;
    CrossSell: Array<CrossSell>;
    Collection: Array<{
      CrossSell: Array<CrossSell>;
    }>;
  };
} & {
  deleted: boolean;
  isStock: boolean;
  type: string;
});

