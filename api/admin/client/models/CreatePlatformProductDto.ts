/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PlatformVariantDto } from './PlatformVariantDto';
import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

export type CreatePlatformProductDto = {
  name: NameDto;
  description?: string;
  details?: string;
  photos: Array<PhotoDto>;
  tags: Array<string>;
  SKU: string;
  supplierContact: string;
  variantOption: PrismaJson_VariantOptions;
  PlatformVariant: Array<PlatformVariantDto>;
  availableSet: PrismaJson_AvailableSet;
};

