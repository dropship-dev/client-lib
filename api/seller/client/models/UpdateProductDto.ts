/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CampaignDto } from './CampaignDto';
import type { DiscountDto } from './DiscountDto';
import type { Partial_Omit_CreateProductFromSellerDependenceDto_variant__ } from './Partial_Omit_CreateProductFromSellerDependenceDto_variant__';
import type { UpdateVariantsForSellerInDependenceDto } from './UpdateVariantsForSellerInDependenceDto';

export type UpdateProductDto = (Partial_Omit_CreateProductFromSellerDependenceDto_variant__ & {
  discount?: Array<DiscountDto>;
  campaign?: CampaignDto;
  variants?: Array<UpdateVariantsForSellerInDependenceDto>;
  shippingFeeAdditional?: number;
  shippingFee?: number;
  description: string;
});

