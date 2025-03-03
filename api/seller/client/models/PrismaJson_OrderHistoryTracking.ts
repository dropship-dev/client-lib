/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { HistoryTrackingType } from './HistoryTrackingType';
export type PrismaJson_OrderHistoryTracking = Array<{
  createAt: string;
  detail: {
    quantity?: number;
    productVariant?: string;
    productName?: string;
    file?: {
      name: string;
      url: string;
    };
    reasonRefund?: string;
    amount?: number;
    paymentType?: _36_Enums_PaymentType;
    email?: string;
    fulfillmentAgencyName?: string;
    customerName?: string;
    value?: string;
  };
  type: HistoryTrackingType;
}>;
