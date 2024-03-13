/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CampaignDto } from './CampaignDto';
import type { DiscountDto } from './DiscountDto';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { UpdateVariantsDto } from './UpdateVariantsDto';

export type UpdateProductDto = {
  name?: NameDto;
  description?: string;
  details?: string;
  photos?: Array<PhotoDto>;
  shippingFee?: number;
  shippingFeeAdditional?: number;
  variantOption?: PrismaJson_VariantOptions;
  variants?: Array<UpdateVariantsDto>;
  SKU?: string;
  permalink?: string;
  tags?: Array<string>;
  campaign?: CampaignDto;
  discount?: Array<DiscountDto>;
};

