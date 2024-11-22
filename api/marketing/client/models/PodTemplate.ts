/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Model PodTemplate
 */
export type PodTemplate = {
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
  podCategoryId: number;
  sku: string | null;
  sizeGuide: string | null;
  keyFeature: string | null;
  supplierContact: string | null;
  description: string | null;
  podTechniqueId: number;
  podProductTypeId: number;
  name: string;
  id: number;
};

