/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { UpdatePlatformProductVariantDto } from './UpdatePlatformProductVariantDto';
export type UpdatePlatformProductDto = {
  name?: string;
  description?: string;
  details?: string;
  SKU?: string;
  photos?: Array<PhotoDto>;
  tags?: Array<string>;
  supplierContact?: string;
  variantOption?: PrismaJson_VariantOptions;
  PlatformVariant?: Array<UpdatePlatformProductVariantDto>;
  availableSet?: PrismaJson_AvailableSet;
  GroupPlatformVariant?: Array<{
    variants: Array<number>;
    name: NameDto;
  }>;
};

