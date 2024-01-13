/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';

/**
 * Model OrderItem
 */
export type OrderItem = {
  updatedAt: string;
  createdAt: string;
  orderRefundId: string | null;
  currencyId: number;
  orderId: string;
  variantComboId: number | null;
  productVariantId: number | null;
  productId: number;
  carrier: string | null;
  tracking: string | null;
  status: FulfillmentStatus;
  latestQuantity: number;
  platformPrice: number;
  quantity: number;
  priceUSD: number;
  price: number;
  id: string;
};

