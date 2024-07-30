/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComboItemDto } from './ComboItemDto';
import type { OrderItemDto } from './OrderItemDto';
import type { PaymentType } from './PaymentType';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';

export type UpdateOrderDto = {
  shippingInfo?: PrismaJson_BillingInfo;
  clientId?: string;
  payment: PaymentType;
  transactionId: string;
  orderItems?: Array<OrderItemDto>;
  comboItems?: Array<ComboItemDto>;
};

