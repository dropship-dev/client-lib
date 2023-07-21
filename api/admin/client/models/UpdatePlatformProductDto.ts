/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

export type UpdatePlatformProductDto = {
  name?: NameDto;
  description?: string;
  details?: string;
  photos?: Array<PhotoDto>;
  shippingFee?: number;
  variantOption?: PrismaJson_VariantOptions;
};

