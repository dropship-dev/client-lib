/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';
import type { OrderDisputeStatus } from './OrderDisputeStatus';
import type { TransactionStatus } from './TransactionStatus';

export type GetAllOrderDto = {
  pageSize?: number;
  fulfillmentAgencyId: number;
  nextPageIndex?: string;
  storeId?: string;
  paymentStatus?: Array<TransactionStatus>;
  fulfillmentStatus?: Array<FulfillmentStatus>;
  search?: string;
  disputeStatus?: Array<OrderDisputeStatus>;
  productName?: string;
  startDate?: string;
  endDate?: string;
  startTotal?: number;
  endTotal?: number;
  gateway?: Array<number>;
};

