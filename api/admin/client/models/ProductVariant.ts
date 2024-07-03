/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_CostInfo } from './PrismaJson_CostInfo';
import type { PrismaJson_MarginInfo } from './PrismaJson_MarginInfo';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';

/**
 * Model ProductVariant
 */
export type ProductVariant = {
  updatedAt: string;
  createdAt: string;
  podDesignVariantId: number | null;
  platformVariantId: number | null;
  productId: number;
  /**
   * [MarginInfo]
   */
  margin: PrismaJson_MarginInfo | null;
  /**
   * [VariantOptionValues]
   */
  variantOption: PrismaJson_VariantOptionValues | null;
  deleted: boolean;
  isEnable: boolean;
  isActive: boolean;
  /**
   * [CostInfo]
   */
  cost: PrismaJson_CostInfo | null;
  supplierPrice: number | null;
  minSellingPrice: number | null;
  compareAtPrice: number;
  price: number;
  SKU: string;
  photo: string;
  name: string;
  id: number;
};

