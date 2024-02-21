/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_CostInfo } from './PrismaJson_CostInfo';
import type { PrismaJson_MarginInfo } from './PrismaJson_MarginInfo';

/**
 * Model ProductVariant
 */
export type ProductVariant = {
  updatedAt: string;
  createdAt: string;
  /**
   * [MarginInfo]
   */
  margin: PrismaJson_MarginInfo | null;
  platformVariantId: number;
  productId: number;
  deleted: boolean;
  isEnable: boolean;
  isActive: boolean;
  /**
   * [CostInfo]
   */
  cost: PrismaJson_CostInfo;
  minSellingPrice: number | null;
  compareAtPrice: number;
  price: number;
  SKU: string;
  photo: string;
  name: string;
  id: number;
};

