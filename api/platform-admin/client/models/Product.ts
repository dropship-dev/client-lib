/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_Photos } from './PrismaJson_Photos';

/**
 * Model Product
 */
export type Product = {
  updatedAt: string;
  createdAt: string;
  storeId: string;
  platformProductId: number;
  isEnable: boolean;
  isActive: boolean;
  SKU: string;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos;
  details: string;
  description: string;
  permalink: string;
  name: string;
  id: number;
};
