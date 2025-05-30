/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
import type { _36_Enums_SyncTrackingStatus } from './_36_Enums_SyncTrackingStatus';
import type { PrismaJson_OrderItemInformation } from './PrismaJson_OrderItemInformation';
export type DefaultSelection_Prisma__36_OrderItemPayload_ = {
  information: PrismaJson_OrderItemInformation;
  orderRefundId: string;
  variantComboId: number;
  productVariantId: number;
  syncTrackingStatus: _36_Enums_SyncTrackingStatus;
  carrier: string;
  tracking: string;
  latestQuantity: number;
  platformPrice: number;
  priceUSD: number;
  quantity: number;
  productId: number;
  price: number;
  orderId: string;
  currencyId: number;
  status: _36_Enums_FulfillmentStatus;
  updatedAt: string;
  createdAt: string;
  id: string;
};

