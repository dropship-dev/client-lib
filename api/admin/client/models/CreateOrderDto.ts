/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderItemDto } from './OrderItemDto';
import type { PaymentType } from './PaymentType';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';

export type CreateOrderDto = {
  shippingInfo?: PrismaJson_BillingInfo;
  note?: string;
  domain?: string;
  payment: PaymentType;
  orderItems: Array<OrderItemDto>;
};

