/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';

/**
 * Model PlatformVariant
 */
export type PlatformVariant = {
  updatedAt: string;
  createdAt: string;
  platformProductId: number;
  isEnable: boolean;
  isActive: boolean;
  supplierPrice: number;
  price: number;
  /**
   * [VariantOptionValues]
   */
  variantOption: PrismaJson_VariantOptionValues;
  SKU: string;
  photo: string;
  name: string;
  id: number;
};

