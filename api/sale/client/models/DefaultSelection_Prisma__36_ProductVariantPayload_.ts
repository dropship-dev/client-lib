/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_CostInfo } from './PrismaJson_CostInfo';
import type { PrismaJson_MarginInfo } from './PrismaJson_MarginInfo';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
export type DefaultSelection_Prisma__36_ProductVariantPayload_ = {
  podDesignVariantId: number;
  platformVariantId: number;
  margin: PrismaJson_MarginInfo;
  minSellingPrice: number;
  compareAtPrice: number;
  productId: number;
  cost: PrismaJson_CostInfo;
  supplierPrice: number;
  price: number;
  photo: string;
  isEnable: boolean;
  variantOption: PrismaJson_VariantOptionValues;
  SKU: string;
  deleted: boolean;
  isActive: boolean;
  name: string;
  updatedAt: string;
  createdAt: string;
  id: number;
};

