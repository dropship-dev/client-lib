/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from './_36_Enums_OrderDisputeStatus';
import type { _36_Enums_OrderStatus } from './_36_Enums_OrderStatus';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
import type { PrismaJson_SyncBalanceAmount } from './PrismaJson_SyncBalanceAmount';
export type DefaultSelection_Prisma__36_OrderPayload_ = {
  disputeStatus: _36_Enums_OrderDisputeStatus;
  paymentId: number;
  isHandleEvents: boolean;
  fingerPrint: string;
  timezoneLocalBrowser: string;
  fulfillmentCost: number;
  fulfillmentStatus: _36_Enums_FulfillmentStatus;
  isSyncBalance: PrismaJson_SyncBalanceAmount;
  retentionRate: number;
  payoutIn: string;
  holdIn: string;
  latestNoItems: number;
  latestSubTotal: number;
  latestTotal: number;
  gatewayTransactionId: string;
  gatewayOrderId: string;
  supplierCost: number;
  lastBalance: number;
  discountShippingFee: number;
  noItems: number;
  tax: number;
  platformFee: number;
  profitFulfillAdmin: number;
  profit: number;
  subTotal: number;
  totalUSD: number;
  total: number;
  note: string;
  additionalInfo: any;
  billingInfo: PrismaJson_BillingInfo;
  province: string;
  address2: string;
  address1: string;
  domain: string;
  currencyId: number;
  shippingFee: number;
  country: string;
  zipCode: string;
  city: string;
  status: _36_Enums_OrderStatus;
  phone: string;
  email: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: string;
  discount: number;
};
