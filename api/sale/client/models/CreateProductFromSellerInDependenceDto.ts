/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { VariantDto } from './VariantDto';
export type CreateProductFromSellerInDependenceDto = {
  name: string;
  description?: string;
  details?: string;
  photos: Array<PhotoDto>;
  tags: Array<string>;
  SKU: string;
  permalink: string;
  supplierContact: string;
  variant: Array<VariantDto>;
  variantOption: PrismaJson_VariantOptions;
};

