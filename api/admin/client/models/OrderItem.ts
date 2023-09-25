/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';

/**
 * Model OrderItem
 */
export type OrderItem = {
  variantComboId: number | null;
  updatedAt: string;
  createdAt: string;
  currencyId: number;
  orderId: string;
  productVariantId: number | null;
  productId: number;
  tracking: string | null;
  status: FulfillmentStatus;
  platformPrice: number;
  quantity: number;
  priceUSD: number;
  price: number;
  id: string;
};

