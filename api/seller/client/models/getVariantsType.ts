/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductVariant } from './ProductVariant';

export type getVariantsType = (ProductVariant & {
  deleted: boolean;
  isStock: boolean;
  Product: {
    platformProductId: number | null;
    name: string;
  };
  type: string;
});

