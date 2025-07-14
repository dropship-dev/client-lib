/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CampaignDto } from './CampaignDto';
import type { DiscountDto } from './DiscountDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_CustomVariantOptions } from './PrismaJson_CustomVariantOptions';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { UpdateVariantsDto } from './UpdateVariantsDto';
export type UpdateProductDto = {
  name?: string;
  description?: string;
  details?: string;
  photos?: Array<PhotoDto>;
  shippingFee?: number;
  shippingFeeAdditional?: number;
  variantOption?: PrismaJson_VariantOptions;
  variants?: UpdateVariantsDto;
  SKU?: string;
  permalink?: string;
  tags?: Array<string>;
  supplierContact?: string;
  campaign?: CampaignDto;
  discount?: Array<DiscountDto>;
  customVariantOption?: PrismaJson_CustomVariantOptions;
  theme?: {
    themePageId: number | null;
    id: number;
  };
};

