/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoostSaleType } from './BoostSaleType';
import type { ProductVariant } from './ProductVariant';

export type getVariantsType = (ProductVariant & {
  deleted: boolean;
  isStock: boolean;
  Product?: {
    boostSale: {
      id?: (number | string);
      status?: boolean;
      type?: BoostSaleType | null;
    };
    platformProductId: number | null;
    name: string;
  };
  type: string;
});

