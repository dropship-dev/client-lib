/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';

/**
 * Model VariantCombo
 */
export type VariantCombo = {
  updatedAt: string;
  createdAt: string;
  supplierCost: number | null;
  productId: number;
  isDeleted: boolean;
  isEnable: boolean;
  isActive: boolean;
  /**
   * [VariantComboItems]
   */
  items: PrismaJson_VariantComboItems;
  minSellingPrice: number | null;
  SKU: string;
  compareAtPrice: number;
  photo: string;
  price: number;
  name: string;
  id: number;
};

