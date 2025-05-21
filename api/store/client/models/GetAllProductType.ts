/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductListType } from './ProductListType';
export type GetAllProductType = {
  hasMore?: boolean;
  orderBy?: string;
  nextPageIndex: number | null;
  prePageIndex: number | null;
  total: number;
  data: Array<ProductListType>;
};

