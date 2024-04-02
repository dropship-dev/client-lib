/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { VariantDto } from './VariantDto';

export type CreateProductFromSellerInDependeceDto = {
  name: NameDto;
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

