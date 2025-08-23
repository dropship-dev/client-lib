/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from './_36_Enums_OrderDisputeStatus';
import type { _36_Enums_TransactionStatus } from './_36_Enums_TransactionStatus';
export type ExportOrderDto = {
  exportedFilename: string;
  fulfillmentAgencyId?: number;
  storeId?: string;
  paymentStatus?: Array<_36_Enums_TransactionStatus>;
  fulfillmentStatus?: Array<_36_Enums_FulfillmentStatus>;
  search?: string;
  productName?: string;
  startDate?: string;
  endDate?: string;
  startTotal?: number;
  endTotal?: number;
  gateway?: Array<number>;
  disputeStatus?: Array<_36_Enums_OrderDisputeStatus>;
  latestStat?: boolean;
  taxable?: boolean;
};

