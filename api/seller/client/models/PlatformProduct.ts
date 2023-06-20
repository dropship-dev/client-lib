/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';

/**
 * Model PlatformProduct
 */
export type PlatformProduct = {
  updatedAt: string;
  createdAt: string;
  isEnable: boolean;
  isActive: boolean;
  shippingFeeAdditional: number;
  shippingFee: number;
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
  id: number;
};

