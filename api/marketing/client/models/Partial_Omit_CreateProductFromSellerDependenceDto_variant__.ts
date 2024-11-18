/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Make all properties in T optional
 */
export type Partial_Omit_CreateProductFromSellerDependenceDto_variant__ = {
  name?: string;
  description?: string;
  SKU?: string;
  details?: string;
  photos?: Array<PhotoDto>;
  variantOption?: PrismaJson_VariantOptions;
  supplierContact?: string;
  permalink?: string;
  tags?: Array<string>;
};

