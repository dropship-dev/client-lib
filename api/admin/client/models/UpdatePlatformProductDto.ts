/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

export type UpdatePlatformProductDto = {
  name?: string;
  description?: string;
  details?: string;
  photos?: Array<string>;
  shippingFee?: number;
  variantOption?: PrismaJson_VariantOptions;
};

