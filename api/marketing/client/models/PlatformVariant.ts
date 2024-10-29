/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_PlatformCostInfo } from './PrismaJson_PlatformCostInfo';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';

/**
 * Model PlatformVariant
 */
export type PlatformVariant = {
  updatedAt: string;
  createdAt: string;
  groupPlatformVariantId: number | null;
  platformProductId: number;
  deleted: boolean;
  isEnable: boolean;
  isActive: boolean;
  /**
   * [PlatformCostInfo]
   */
  cost: PrismaJson_PlatformCostInfo;
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

