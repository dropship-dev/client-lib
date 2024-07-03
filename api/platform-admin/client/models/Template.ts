/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Model Template
 */
export type Template = {
  updatedAt: string;
  createdAt: string;
  isDeleted: boolean;
  isActive: boolean;
  isEnable: boolean;
  isStock: boolean;
  /**
   * [VariantOptions]
   */
  variantOption: PrismaJson_VariantOptions;
  categoryId: number;
  sku: string;
  sizeGuide: string | null;
  keyFeature: string | null;
  supplierContact: string | null;
  description: string | null;
  techniqueId: number;
  productTypeId: number;
  name: string;
  id: number;
};

