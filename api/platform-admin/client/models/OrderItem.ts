/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentStatus } from './FulfillmentStatus';
import type { SyncTrackingStatus } from './SyncTrackingStatus';
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
  syncTrackingStatus: SyncTrackingStatus | null;
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

