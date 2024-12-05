/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { ComboItemDto } from './ComboItemDto';
import type { OrderItemDto } from './OrderItemDto';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
export type UpdateOrderDto = {
  shippingInfo?: PrismaJson_BillingInfo;
  clientId?: string;
  payment: _36_Enums_PaymentType;
  transactionId: string;
  orderItems?: Array<OrderItemDto>;
  comboItems?: Array<ComboItemDto>;
};

