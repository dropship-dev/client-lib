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
  /**
   * [VariantOptionValues]
   */
  variantOption: PrismaJson_VariantOptionValues;
  SKU: string;
  photo: string;
  supplierPrice: number;
  price: number;
  name: string;
  id: number;
};

