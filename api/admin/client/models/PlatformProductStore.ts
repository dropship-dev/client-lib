/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Store } from './Store';
export type PlatformProductStore = (Store & {
  Product: Array<{
    permalink: string;
    isActive: boolean;
    id: number;
    ProductVariant: Array<{
      price: number;
    }>;
  }>;
} & {
  minMinSellingPrice: number;
  maxMinSellingPrice: number;
  minFulfillmentPrice: number;
  maxFulfillmentPrice: number;
  statusOnStore: boolean;
});

