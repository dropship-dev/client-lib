/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type CreatePlatformVariantDto = {
  name: NameDto;
  price: number;
  supplierPrice: number;
  photo: PhotoDto;
  SKU: string;
  variantOption: Array<{
    option: string;
    name: string;
  }>;
};
