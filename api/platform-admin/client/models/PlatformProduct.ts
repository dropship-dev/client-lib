/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Model PlatformProduct
 */
export type PlatformProduct = {
  updatedAt: string;
  createdAt: string;
  fulfillmentAgencyId: number;
  isEnable: boolean;
  isActive: boolean;
  supplierContact: string;
  /**
   * [AvailableSet]
   */
  availableSet: PrismaJson_AvailableSet | null;
  /**
   * [VariantOptions]
   */
  variantOption: PrismaJson_VariantOptions;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos;
  details: string;
  description: string;
  name: string;
  SKU: string;
  id: number;
};

