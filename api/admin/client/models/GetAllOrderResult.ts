/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FraudDetectionStatusType } from './_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from './_36_Enums_OrderDisputeStatus';
import type { _36_Enums_OrderStatus } from './_36_Enums_OrderStatus';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { _36_Enums_TransactionStatus } from './_36_Enums_TransactionStatus';
import type { FraudStatusType } from './FraudStatusType';
export type GetAllOrderResult = ({
  domain: string;
  paymentId: number;
  gatewayTransactionId: string;
  fulfillmentStatus: _36_Enums_FulfillmentStatus;
  disputeStatus: _36_Enums_OrderDisputeStatus;
  status: _36_Enums_OrderStatus;
  email: string;
  name: string;
  total: number;
  platformFee?: number;
  latestTotal: number;
  createdAt: string;
  storeId: string;
  id: string;
} & {
  fraudStatus?: FraudStatusType;
  Store: {
    fraudStatus?: FraudStatusType;
    FraudDetection?: Array<{
      systemFraudDetect: _36_Enums_FraudDetectionStatusType;
      humanFraudDetect: _36_Enums_FraudDetectionStatusType;
    }>;
    primaryDomain?: string;
    name?: string;
    id?: string;
  };
  OrderItem: Array<{
    tracking: string | null;
    orderId: string;
  }>;
  Transaction: Array<{
    status: _36_Enums_TransactionStatus;
    orderId: string | null;
  }>;
  Payment?: {
    type: _36_Enums_PaymentType;
    email: string;
    name: string;
    id: number;
  };
});

