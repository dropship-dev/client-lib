/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountBoostSaleType } from './DiscountBoostSaleType';
import type { ProductVariant } from './ProductVariant';
export type SuggestionResponseDto = {
  quantity?: number;
  value: number;
  productId: number;
  type: DiscountBoostSaleType;
  id?: number;
  ProductVariant?: Array<ProductVariant>;
};

