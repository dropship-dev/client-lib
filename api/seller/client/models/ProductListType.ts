/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTag } from './AdminTag';
import type { Campaign } from './Campaign';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
import type { PrismaJson_VariantOptionValues } from './PrismaJson_VariantOptionValues';
import type { Product } from './Product';
import type { ProductVariant } from './ProductVariant';
import type { Tag } from './Tag';
import type { VariantCombo } from './VariantCombo';
export type ProductListType = (Product & {
  isInValidStateToBeDuplicated: boolean;
  Review: Array<{
    rating: number;
  }>;
  Campaign: Campaign | null;
  VariantCombo: Array<VariantCombo>;
  ProductVariant: Array<(ProductVariant & {
    PlatformVariant: {
      updatedAt: string;
      createdAt: string;
      isEnable: boolean;
      isActive: boolean;
      photo: string;
      variantOption: PrismaJson_VariantOptionValues;
      platformProductId: number;
      name: string;
      price: number;
      id: number;
    } | null;
  })>;
  Tag: Array<Tag>;
  PlatformProduct: {
    deleted: boolean;
    isEnable: boolean;
    isActive: boolean;
    Tag: Array<AdminTag>;
    variantOption: PrismaJson_VariantOptions;
  } | null;
});

