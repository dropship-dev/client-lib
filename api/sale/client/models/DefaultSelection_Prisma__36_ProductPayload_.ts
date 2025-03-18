/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
export type DefaultSelection_Prisma__36_ProductPayload_ = {
  podTemplateId: number;
  campaignId: string;
  isEnable: boolean;
  supplierContact: string;
  variantOption: PrismaJson_VariantOptions;
  availableSet: PrismaJson_AvailableSet;
  SKU: string;
  details: string;
  permalink: string;
  deleted: boolean;
  platformProductId: number;
  description: string;
  isActive: boolean;
  photos: PrismaJson_Photos;
  shippingFeeAdditional: number;
  shippingFee: number;
  name: string;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: number;
};

