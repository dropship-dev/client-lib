/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComboItemDto } from './ComboItemDto';
import type { CreateAbandonmentOrder } from './CreateAbandonmentOrder';
import type { OrderItemDto } from './OrderItemDto';
import type { PaymentType } from './PaymentType';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';

export type CaptureOrderDto = {
  shippingInfo?: PrismaJson_BillingInfo;
  billingInfo?: PrismaJson_BillingInfo;
  note?: string;
  domain?: string;
  clientId?: string;
  payment: PaymentType;
  orderItems?: Array<OrderItemDto>;
  comboItems?: Array<ComboItemDto>;
  referrer?: string;
  timezoneLocalBrowser?: string;
  fingerPrint?: string;
  cloverOrder?: {
    tokenCard: string;
    orderSystemId: string;
  };
  track?: {
    token: string;
    id: number;
  };
  abandonment?: CreateAbandonmentOrder;
};

