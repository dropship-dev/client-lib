/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlatformVariantDto } from './PlatformVariantDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

export type CreatePlatformProductDto = {
  name: string;
  description?: string;
  details?: string;
  photos: Array<string>;
  tags: Array<string>;
  variantOption: PrismaJson_VariantOptions;
  PlatformVariant: Array<PlatformVariantDto>;
};

