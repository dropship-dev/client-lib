/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlatformVariant } from './PlatformVariant';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

export type CreatePlatformProductDto = {
  name: string;
  description?: string;
  details?: string;
  photos: Array<string>;
  shippingFee: number;
  shippingFeeAdditional?: number;
  tags: Array<string>;
  variantOption: PrismaJson_VariantOptions;
  PlatformVariant: Array<PlatformVariant>;
};

