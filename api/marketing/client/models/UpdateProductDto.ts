/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CampaignDto } from './CampaignDto';
import type { DiscountDto } from './DiscountDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { UpdateVariantsForSellerInDependenceDto } from './UpdateVariantsForSellerInDependenceDto';

export type UpdateProductDto = {
  name?: string;
  description?: string;
  details?: string;
  photos?: Array<PhotoDto>;
  shippingFee?: number;
  shippingFeeAdditional?: number;
  variantOption?: PrismaJson_VariantOptions;
  variants?: Array<UpdateVariantsForSellerInDependenceDto>;
  SKU?: string;
  permalink?: string;
  tags?: Array<string>;
  supplierContact?: string;
  campaign?: CampaignDto;
  discount?: Array<DiscountDto>;
};

