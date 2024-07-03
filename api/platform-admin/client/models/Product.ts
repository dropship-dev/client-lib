/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Model Product
 */
export type Product = {
  updatedAt: string;
  createdAt: string;
  templateId: number | null;
  campaignId: string | null;
  storeId: string;
  platformProductId: number | null;
  deleted: boolean;
  isEnable: boolean;
  isActive: boolean;
  supplierContact: string | null;
  shippingFeeAdditional: number;
  shippingFee: number;
  /**
   * [VariantOptions]
   */
  variantOption: PrismaJson_VariantOptions | null;
  /**
   * [AvailableSet]
   */
  availableSet: PrismaJson_AvailableSet | null;
  SKU: string;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos;
  details: string;
  description: string;
  permalink: string;
  name: string;
  id: number;
};

