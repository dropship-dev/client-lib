/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComboItemTrackingDto } from './ComboItemTrackingDto';
import type { OrderItemTrackingDto } from './OrderItemTrackingDto';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';

export type UpdateOrderTrackingDto = {
  email: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  orderItems?: Array<OrderItemTrackingDto>;
  comboItems?: Array<ComboItemTrackingDto>;
  shippingInfo?: PrismaJson_BillingInfo;
  token: string;
};

