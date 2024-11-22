/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';

export type VariantDto = {
  name: string;
  photo: PhotoDto;
  price: number;
  supplierPrice: number;
  compareAtPrice: number;
  SKU: string;
  variantOption: PrismaJson_VariantOptionValues;
};

