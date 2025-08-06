/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { ComboItemTrackingDto } from './ComboItemTrackingDto';
import type { OrderItemTrackingDto } from './OrderItemTrackingDto';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
export type CreateOrderTrackingDto = {
  timezoneLocalBrowser?: string;
  orderItems?: Array<OrderItemTrackingDto>;
  comboItems?: Array<ComboItemTrackingDto>;
  orderId?: string;
  storeId: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  shippingInfo?: PrismaJson_BillingInfo;
  clientId?: string;
  merchantId?: string;
  payment: _36_Enums_PaymentType;
};

