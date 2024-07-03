/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_PhotoDesign } from './PrismaJson_PhotoDesign';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Model Design
 */
export type Design = {
  updatedAt: string;
  createdAt: string;
  isDraft: boolean;
  isDeleted: boolean;
  isActive: boolean;
  /**
   * [VariantOptions]
   */
  variantOption: PrismaJson_VariantOptions;
  sku: string | null;
  supplierContract: string | null;
  sizeGuide: string;
  description: string | null;
  name: string;
  /**
   * [PhotoDesign]
   */
  photos: PrismaJson_PhotoDesign;
  storeId: string;
  templateId: number;
  id: number;
};

