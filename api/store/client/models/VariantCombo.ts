/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_VariantComboItems } from './PrismaJson_VariantComboItems';

/**
 * Model VariantCombo
 */
export type VariantCombo = {
  isDeleted: boolean;
  updatedAt: string;
  createdAt: string;
  minSellingPrice: number | null;
  productId: number;
  isEnable: boolean;
  isActive: boolean;
  /**
   * [VariantComboItems]
   */
  items: PrismaJson_VariantComboItems;
  SKU: string;
  compareAtPrice: number;
  photo: string;
  price: number;
  name: string;
  id: number;
};

