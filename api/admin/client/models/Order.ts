/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';

/**
 * Model Order
 */
export type Order = {
  updatedAt: string;
  createdAt: string;
  paymentId: number;
  currencyId: number;
  transactionId: number;
  storeId: string;
  fulfillmentStatus: FulfillmentStatus;
  gatewayTransactionId: string | null;
  gatewayOrderId: string;
  lastBalance: number;
  discount: number;
  discountShippingFee: number;
  noItems: number;
  tax: number;
  platformFee: number;
  profit: number;
  totalUSD: number;
  subTotal: number;
  total: number;
  shippingFee: number;
  note: string | null;
  domain: string | null;
  /**
   * [BillingInfo]
   */
  billingInfo: PrismaJson_BillingInfo | null;
  country: string;
  zipCode: string;
  province: string;
  city: string;
  address2: string;
  address1: string;
  phone: string | null;
  email: string;
  name: string;
  id: string;
};

